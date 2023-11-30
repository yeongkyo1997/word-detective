package com.ssafy.backend.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    // 서비스 에러 : 서버 내부 에러
    SERVICE_ERROR("SERVICE_ERROR", "서비스 에러"),
    // 검증 에러 : 클라이언트 요청값 검증 에러
    VALIDATION_ERROR("VALIDATION_ERROR", "검증 에러"),
    // 해당 값이 없을때
    NOT_FOUND("NOT_FOUND", "해당 값이 없음"),
    // 이미 존재할때
    ALREADY_EXIST("ALREADY_EXIST", "이미 존재함"),
    // 권한이 없을때
    UNAUTHORIZED("UNAUTHORIZED", "권한 없음"),
    // 해당 유저가 없을때
    USER_NOT_FOUND("USER_NOT_FOUND", "해당 유저가 없음"),
    // 해당 단어가 없을때
    WORD_NOT_FOUND("WORD_NOT_FOUND", "해당 단어가 없음"),
    // 해당 파일이 없을때
    FILE_NOT_FOUND("FILE_NOT_FOUND", "해당 파일이 없음"),
    // 랜덤 단어 개수가 정답의 중복 개수 보다 작을때
    RAND_CNT_LESS_THAN_CORRECT_CNT("RAND_CNT_LESS_THAN_CORRECT_CNT", "랜덤 단어 개수가 정답의 중복 개수 보다 작음");

    private final String code;
    private final String description;
}
