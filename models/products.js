import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '缺少商品']
  },
  price: {
    type: Number,
    required: [true, '缺少價格'],
    min: [0, '價格太低']
  },
  image: {
    type: String,
    required: [true, '缺少圖片']
  },
  description: {
    type: String,
    required: [true, '缺少說明']
  },
  category: {
    type: String,
    required: [true, '缺少分類'],
    enum: {
      values: ['窯烤麵包', '料理包', '其他'],
      message: '分類錯誤'
    }
  },
  inventory: {
    type: Number,
    required: [true, '缺少數量'],
    min: [0, '數量不足']
  },
  sell: {
    type: Boolean,
    required: [true, '缺少上架狀態']
  }
}, { versionKey: false })

export default mongoose.model('products', schema)
