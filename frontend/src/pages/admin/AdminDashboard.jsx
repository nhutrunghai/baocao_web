import { useEffect, useMemo, useState } from 'react'
import AdminLayout from '../../components/AdminLayout.jsx'
import {
  getAdminCompanies,
  getAdminDashboardSummary,
  getAdminJobs,
  getAdminUsers,
} from '../../api/adminService.js'
import Toast from '../../components/Toast.jsx'

const metricToneMap = {
  slate: 'border-slate-200 bg-white text-slate-900',
  indigo: 'border-indigo-100 bg-indigo-50 text-indigo-950',
  emerald: 'border-emerald-100 bg-emerald-50 text-emerald-950',
  amber: 'border-amber-100 bg-amber-50 text-amber-950',
}

const statusLabelMap = {
  draft: 'Bản nháp',
  open: 'Đang tuyển',
  paused: 'Tạm dừng',
  closed: 'Đã đóng',
  expired: 'Hết hạn',
}

function formatNumber(value) {
  if (value === null || value === undefined || value === '') return '--'
  return new Intl.NumberFormat('vi-VN').format(Number(value) || 0)
}

function formatDate(value) {
  if (!value) return 'Chưa có'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Chưa có'
  return new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date)
}

function percent(part, total) {
  if (!total) return 0
  return Math.min(100, Math.round((Number(part || 0) / Number(total)) * 100))
}

function MiniTrend({ values, color = '#4f46e5' }) {
  const points = values.map((value, index) => {
    const x = 8 + index * (104 / Math.max(values.length - 1, 1))
    const y = 42 - (Number(value) / Math.max(...values, 1)) * 28
    return `${x},${y}`
  })

  return (
    <svg viewBox="0 0 120 48" className="h-12 w-full" aria-hidden="true">
      <polyline fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" points={points.join(' ')} />
      <line x1="8" y1="42" x2="112" y2="42" stroke="#e2e8f0" strokeWidth="1" />
    </svg>
  )
}

function MetricCard({ label, value, hint, icon, tone = 'slate', progress }) {
  return (
    <article className={`rounded-lg border p-3.5 shadow-sm ${metricToneMap[tone] || metricToneMap.slate}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] opacity-55">{label}</p>
          <p className="mt-2 text-[28px] font-extrabold leading-none tracking-tight">{formatNumber(value)}</p>
        </div>
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/70 text-slate-700 ring-1 ring-black/5">
          <span className="material-symbols-outlined text-[18px]">{icon}</span>
        </span>
      </div>
      <div className="mt-3">
        <div className="h-1.5 overflow-hidden rounded-full bg-black/5">
          <div className="h-full rounded-full bg-current opacity-55" style={{ width: `${progress ?? 48}%` }} />
        </div>
        <p className="mt-2 text-[11px] font-semibold opacity-60">{hint}</p>
      </div>
    </article>
  )
}

function Panel({ title, action, children, className = '' }) {
  return (
    <section className={`rounded-lg border border-slate-200 bg-white shadow-sm ${className}`}>
      <div className="flex h-11 items-center justify-between gap-3 border-b border-slate-100 px-4">
        <h2 className="text-[13px] font-extrabold tracking-tight text-slate-950">{title}</h2>
        {action ? <div className="text-[12px] font-bold text-slate-500">{action}</div> : null}
      </div>
      <div className="p-4">{children}</div>
    </section>
  )
}

export default function AdminDashboard() {
  const [summary, setSummary] = useState(null)
  const [users, setUsers] = useState([])
  const [companies, setCompanies] = useState([])
  const [jobs, setJobs] = useState([])
  const [blockedJobs, setBlockedJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    let active = true

    Promise.all([
      getAdminDashboardSummary(),
      getAdminUsers({ page: 1, limit: 5 }),
      getAdminCompanies({ page: 1, limit: 5 }),
      getAdminJobs({ page: 1, limit: 6 }),
      getAdminJobs({ page: 1, limit: 4, moderation_status: 'blocked' }),
    ])
      .then(([summaryData, usersData, companiesData, jobsData, blockedJobsData]) => {
        if (!active) return
        setSummary(summaryData)
        setUsers(usersData?.users ?? [])
        setCompanies(companiesData?.companies ?? [])
        setJobs(jobsData?.jobs ?? [])
        setBlockedJobs(blockedJobsData?.jobs ?? [])
      })
      .catch((error) => {
        if (active) setToast({ type: 'error', message: error.message || 'Không thể tải bảng tổng quan.' })
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const derived = useMemo(() => {
    const totalUsers = summary?.total_users || 0
    const totalCompanies = summary?.total_companies || 0
    const totalJobs = summary?.total_jobs || 0
    const openJobs = summary?.open_jobs || 0
    const unverifiedUsers = summary?.unverified_users || 0
    const unverifiedCompanies = summary?.unverified_companies || 0
    const totalApplications = summary?.total_applications || 0

    return {
      health: Math.max(0, 100 - Math.round((percent(unverifiedUsers, totalUsers) + percent(unverifiedCompanies, totalCompanies)) / 2)),
      openJobRate: percent(openJobs, totalJobs),
      userVerifyRate: 100 - percent(unverifiedUsers, totalUsers),
      companyVerifyRate: 100 - percent(unverifiedCompanies, totalCompanies),
      trend: [
        Math.max(1, Math.round(totalUsers * 0.38)),
        Math.max(2, Math.round(totalCompanies * 1.8)),
        Math.max(3, Math.round(totalJobs * 0.45)),
        Math.max(4, Math.round(totalApplications * 8 + 8)),
        Math.max(5, Math.round(openJobs * 0.62 + 12)),
        Math.max(6, Math.round(totalJobs * 0.7 + 18)),
      ],
    }
  }, [summary])

  return (
    <AdminLayout title="Tổng quan" subtitle="Tổng quan vận hành hệ thống từ dữ liệu người dùng, doanh nghiệp, tin tuyển dụng và hồ sơ ứng tuyển.">
      <Toast toast={toast} onClose={() => setToast(null)} />

      <section className="mb-4 grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1.35fr)_360px]">
        <div className="rounded-lg border border-slate-200 bg-slate-950 p-4 text-white shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">Trung tâm điều hành</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Bảng điều hành quản trị</h2>
              <p className="mt-2 max-w-2xl text-[13px] font-medium leading-5 text-slate-400">
                Theo dõi người dùng, doanh nghiệp, tin tuyển dụng và hàng đợi kiểm duyệt trong một màn hình.
              </p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-left sm:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Sức khỏe hệ thống</p>
              <p className="mt-1 text-2xl font-extrabold text-emerald-300">{derived.health}%</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-white/[0.04] p-3 ring-1 ring-white/10">
              <p className="text-[11px] font-semibold text-slate-400">Tỷ lệ tin đang tuyển</p>
              <p className="mt-1 text-xl font-extrabold">{derived.openJobRate}%</p>
            </div>
            <div className="rounded-md bg-white/[0.04] p-3 ring-1 ring-white/10">
              <p className="text-[11px] font-semibold text-slate-400">Người dùng đã xác minh</p>
              <p className="mt-1 text-xl font-extrabold">{derived.userVerifyRate}%</p>
            </div>
            <div className="rounded-md bg-white/[0.04] p-3 ring-1 ring-white/10">
              <p className="text-[11px] font-semibold text-slate-400">Doanh nghiệp đã xác minh</p>
              <p className="mt-1 text-xl font-extrabold">{derived.companyVerifyRate}%</p>
            </div>
          </div>
        </div>

        <Panel title="Tín hiệu vận hành" action={loading ? 'Đang tải' : 'Trực tiếp'}>
          <MiniTrend values={derived.trend} />
          <div className="mt-3 grid grid-cols-1 gap-2 text-[12px] sm:grid-cols-2">
            <div className="rounded-md bg-slate-50 p-3">
              <p className="font-bold text-slate-500">Ứng tuyển</p>
              <p className="mt-1 text-lg font-extrabold text-slate-950">{formatNumber(summary?.total_applications)}</p>
            </div>
            <div className="rounded-md bg-slate-50 p-3">
              <p className="font-bold text-slate-500">Tin bị chặn</p>
              <p className="mt-1 text-lg font-extrabold text-slate-950">{formatNumber(blockedJobs.length)}</p>
            </div>
          </div>
        </Panel>
      </section>

      <section className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2 2xl:grid-cols-4">
        <MetricCard label="Người dùng" value={summary?.total_users} hint={`${formatNumber(summary?.unverified_users)} chưa xác minh`} icon="group" tone="indigo" progress={derived.userVerifyRate} />
        <MetricCard label="Doanh nghiệp" value={summary?.total_companies} hint={`${formatNumber(summary?.unverified_companies)} cần duyệt`} icon="apartment" tone="emerald" progress={derived.companyVerifyRate} />
        <MetricCard label="Tin tuyển dụng" value={summary?.total_jobs} hint={`${formatNumber(summary?.open_jobs)} đang mở`} icon="work" tone="amber" progress={derived.openJobRate} />
        <MetricCard label="Hồ sơ ứng tuyển" value={summary?.total_applications} hint="Tổng hồ sơ đã ghi nhận" icon="assignment_ind" tone="slate" progress={Math.min(100, (summary?.total_applications || 0) * 12)} />
      </section>

      <section className="grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1.35fr)_360px]">
        <Panel title="Tin tuyển dụng mới nhất" action={`${jobs.length} bản ghi`}>
          <div className="overflow-hidden rounded-md border border-slate-100">
            <div className="hidden grid-cols-[minmax(0,1.2fr)_150px_110px_90px] bg-slate-50 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400 md:grid">
              <span>Tin tuyển dụng</span>
              <span>Doanh nghiệp</span>
              <span>Trạng thái</span>
              <span>Cập nhật</span>
            </div>
            {jobs.map((job) => (
              <div key={job._id} className="border-t border-slate-100 px-3 py-2.5 text-[12px] md:grid md:grid-cols-[minmax(0,1.2fr)_150px_110px_90px] md:items-center md:gap-3">
                <div className="min-w-0">
                  <p className="truncate font-bold text-slate-950">{job.title}</p>
                  <p className="mt-0.5 truncate text-[11px] font-medium text-slate-500">{job.level || 'Chưa có cấp bậc'} · {job.location || 'Chưa có địa điểm'}</p>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2 md:mt-0 md:contents">
                  <p className="truncate font-semibold text-slate-600">{job.company?.company_name || 'Chưa có doanh nghiệp'}</p>
                  <span className="w-fit rounded-full border border-slate-200 bg-white px-2 py-1 text-[11px] font-bold text-slate-600">
                    {statusLabelMap[job.status] || job.status || 'Chưa rõ'}
                  </span>
                  <p className="font-semibold text-slate-500">{formatDate(job.updated_at)}</p>
                </div>
              </div>
            ))}
            {!jobs.length ? <div className="px-3 py-6 text-center text-[13px] font-semibold text-slate-400">Chưa có dữ liệu tin tuyển dụng.</div> : null}
          </div>
        </Panel>

        <div className="space-y-3">
          <Panel title="Hàng đợi kiểm duyệt" action={blockedJobs.length ? 'Cần xem' : 'Ổn định'}>
            <div className="space-y-2">
              {blockedJobs.map((job) => (
                <div key={job._id} className="rounded-md border border-rose-100 bg-rose-50/60 p-3">
                  <p className="truncate text-[13px] font-extrabold text-slate-950">{job.title}</p>
                  <p className="mt-1 truncate text-[11px] font-semibold text-rose-700">{job.blocked_reason || 'Đã bị chặn bởi quản trị viên'}</p>
                </div>
              ))}
              {!blockedJobs.length ? (
                <div className="rounded-md border border-emerald-100 bg-emerald-50 p-3 text-[12px] font-bold text-emerald-800">
                  Không có tin bị chặn trong danh sách mới nhất.
                </div>
              ) : null}
            </div>
          </Panel>

          <Panel title="Doanh nghiệp mới">
            <div className="space-y-2">
              {companies.slice(0, 4).map((company) => (
                <div key={company._id} className="flex flex-col gap-2 rounded-md border border-slate-100 p-2.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="truncate text-[12px] font-extrabold text-slate-950">{company.company_name}</p>
                    <p className="mt-0.5 text-[11px] font-semibold text-slate-400">{formatDate(company.updated_at || company.created_at)}</p>
                  </div>
                  <span className={`w-fit rounded-full px-2 py-1 text-[10px] font-extrabold ${company.verified ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                    {company.verified ? 'Đã xác minh' : 'Chờ duyệt'}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </section>

      <section className="mt-3">
        <Panel title="Người dùng cập nhật gần đây" action={`${users.length} người dùng`}>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-5">
            {users.map((user) => (
              <div key={user._id} className="rounded-md border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-[12px] font-extrabold text-slate-700 ring-1 ring-slate-200">
                    {(user.fullName || user.email || 'U').slice(0, 1).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[12px] font-extrabold text-slate-950">{user.fullName || user.username || 'Người dùng'}</p>
                    <p className="truncate text-[11px] font-medium text-slate-500">{user.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </AdminLayout>
  )
}
