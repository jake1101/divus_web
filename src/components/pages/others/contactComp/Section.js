import React from 'react'

export default function Section() {
    return (
        <div>
            <form>
                <input value="이름" />
                <input value="이메일" />
                <input value="전화" />
                <input value="제목" />
                <textarea value="문의 내용을 입력해 주세요" />
                <input type="button" value="전송" />
            </form>
        </div>
    )
}
