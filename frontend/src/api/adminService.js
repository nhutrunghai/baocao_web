import { buildApiUrl, createJsonHeaders } from '../config/api.js'

const ADMIN_AUTH_STORAGE_KEYS = ['adminToken', 'adminAccessToken', 'adminRefreshToken', 'adminUser']

function getAdminStoredValue(key) {
  if (typeof window === 'undefined') return ''
  return window.localStorage.getItem(key) || window.sessionStorage.getItem(key) || ''
}

function getPreferredAdminStorage() {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem('adminAccessToken') || window.localStorage.getItem('adminToken')
    ? window.localStorage
    : window.sessionStorage
}

export function getAdminAccessToken() {
  return getAdminStoredValue('adminAccessToken') || getAdminStoredValue('adminToken')
}

function clearAdminAuthSession() {
  if (typeof window === 'undefined') return
  ADMIN_AUTH_STORAGE_KEYS.forEach((key) => {
    window.localStorage.removeItem(key)
    window.sessionStorage.removeItem(key)
  })
}

function saveAdminAuthSession(payload) {
  if (typeof window === 'undefined' || !payload) return

  const accessToken = payload.accessToken || payload.AccessToken || payload.token || payload.access_token || ''
  const refreshToken = payload.refreshToken || payload.RefreshToken || payload.refresh_token || ''
  const adminUser = payload.admin || payload.user || payload.data?.admin || payload.data?.user || null

  if (!accessToken && !refreshToken && !adminUser) return

  const storage = getPreferredAdminStorage() || window.localStorage
  clearAdminAuthSession()

  if (accessToken) {
    storage.setItem('adminAccessToken', accessToken)
    storage.setItem('adminToken', accessToken)
  }

  if (refreshToken) {
    storage.setItem('adminRefreshToken', refreshToken)
  }

  if (adminUser) {
    storage.setItem('adminUser', JSON.stringify(adminUser))
  }
}

async function readPayload(response) {
  try {
    return await response.json()
  } catch {
    return null
  }
}

function extractErrorMessage(payload, fallback) {
  if (payload?.message) return payload.message
  if (payload?.error?.message) return payload.error.message
  return fallback
}

function redirectToAdminLogin() {
  if (typeof window === 'undefined') return
  if (window.location.pathname === '/admin/login') return

  const redirect = `${window.location.pathname}${window.location.search}`
  window.location.assign(`/admin/login?redirect=${encodeURIComponent(redirect)}`)
}

async function adminRequest(method, path, { params, data, redirectOnUnauthorized = true } = {}) {
  const adminToken = getAdminAccessToken()
  const headers = createJsonHeaders({}, { auth: false, hasBody: data !== undefined })

  if (adminToken && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${adminToken}`)
  }

  const response = await fetch(buildApiUrl(path, params), {
    method,
    credentials: 'include',
    headers,
    body: data !== undefined ? JSON.stringify(data) : undefined,
  })
  const payload = await readPayload(response)

  if (!response.ok) {
    if (response.status === 401) {
      clearAdminAuthSession()
      if (redirectOnUnauthorized) {
        redirectToAdminLogin()
      }
    }

    throw new Error(extractErrorMessage(payload, `HTTP ${response.status}: ${response.statusText}`))
  }

  return payload?.data ?? payload
}

export async function adminLogin(body) {
  const result = await adminRequest('POST', '/admin/auth/login', {
    data: {
      email: body?.email,
      password: body?.password,
    },
    redirectOnUnauthorized: false,
  })

  saveAdminAuthSession(result)
  return result
}

export async function adminLogout() {
  try {
    return await adminRequest('POST', '/admin/auth/logout')
  } finally {
    clearAdminAuthSession()
  }
}

export async function getAdminMe() {
  return adminRequest('GET', '/admin/auth/me')
}

export async function getAdminDashboardSummary() {
  return adminRequest('GET', '/admin/dashboard/summary')
}

export async function getAdminUsers(params = {}) {
  return adminRequest('GET', '/admin/users', { params })
}

export async function getAdminUserDetail(userId) {
  return adminRequest('GET', `/admin/users/${userId}`)
}

export async function updateAdminUserStatus(userId, status) {
  return adminRequest('PATCH', `/admin/users/${userId}/status`, {
    data: {
      status: Number(status),
    },
  })
}

export async function getAdminCompanies(params = {}) {
  return adminRequest('GET', '/admin/companies', { params })
}

export async function getAdminCompanyDetail(companyId) {
  return adminRequest('GET', `/admin/companies/${companyId}`)
}

export async function getAdminCompanyJobs(companyId, params = {}) {
  return adminRequest('GET', `/admin/companies/${companyId}/jobs`, { params })
}

export async function getAdminCompanyApplications(companyId, params = {}) {
  return adminRequest('GET', `/admin/companies/${companyId}/applications`, { params })
}

export async function updateAdminCompanyStatus(companyId, verified) {
  return adminRequest('PATCH', `/admin/companies/${companyId}/status`, {
    data: {
      verified: Boolean(verified),
    },
  })
}

export async function getAdminJobs(params = {}) {
  return adminRequest('GET', '/admin/jobs', { params })
}

export async function getAdminJobDetail(jobId) {
  return adminRequest('GET', `/admin/jobs/${jobId}`)
}

export async function updateAdminJobModerationStatus(jobId, body) {
  return adminRequest('PATCH', `/admin/jobs/${jobId}/moderation-status`, {
    data: {
      moderation_status: body?.moderation_status,
      blocked_reason: body?.blocked_reason,
    },
  })
}
