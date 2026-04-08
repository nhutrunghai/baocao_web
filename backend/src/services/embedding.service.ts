import { HfInference } from '@huggingface/inference'
import env from '../configs/env.config'

const createHfClient = () => {
  if (!env.HUGGINGFACE_API_KEY) {
    throw new Error('Khong ton tai HUGGINGFACE_API_KEY')
  }

  return new HfInference(env.HUGGINGFACE_API_KEY)
}

/**
 * Hàm biến văn bản tiếng Việt thành Vector 768 chiều
 */
export const generateEmbedding = async (text: string): Promise<number[]> => {
  try {
    const model = 'dangvantuan/vietnamese-embedding'
    const hf = createHfClient()

    // Gọi Inference API
    const output = await hf.featureExtraction({
      model,
      inputs: text,
    })

    // Ép kiểu về mảng số
    return output as number[]
  } catch (error) {
    console.error('Lỗi khi tạo Embedding:', error)
    throw error
  }
}
