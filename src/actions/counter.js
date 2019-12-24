import Action from './index';

export function increment(data) {
    return {
        // Action ที่กำหนด Key ชื่อว่า 'INCREMENT'
        type: Action.INCREMENT,
        // ส่งค่าเข้าไป data เข้าไปด้วย
        text: data
    }
}

export function decrement(data) {
    return {
        type: Action.DECREMENT,
        text: data
    }
}

export function test(data) {
    return {
        type: Action.TEST,
        text: data
    }
}