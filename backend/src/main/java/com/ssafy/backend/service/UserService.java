package com.ssafy.backend.service;

import com.ssafy.backend.dto.UserRequestDto;
import com.ssafy.backend.dto.UserResponseDto;
import com.ssafy.backend.entity.User;
import com.ssafy.backend.exception.CustomException;
import com.ssafy.backend.exception.ErrorCode;
import com.ssafy.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    /**
     * 유저 정보 조회 또는 생성
     *
     * @param userId 유저 아이디
     * @return 유저 정보
     */
    @Transactional
    public UserResponseDto getUserInfoOrCreate(Long userId) {
        User user = userId == null ? userRepository.save(new User()) : userRepository.findById(userId).orElseThrow(
                () -> new CustomException(ErrorCode.USER_NOT_FOUND)
        );

        return UserResponseDto.builder()
                .id(user.getId())
                .picture(user.getPicture())
                .word(user.getWord())
                .letter(user.getLetter())
                .build();
    }
    @Transactional
    public UserResponseDto updateClear(Long userId, UserRequestDto userRequestDto) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new CustomException(ErrorCode.USER_NOT_FOUND)
        );

        User updatedUser = User.builder()
                .id(user.getId())
                .picture(userRequestDto.getPicture())
                .word(userRequestDto.getWord())
                .letter(userRequestDto.getLetter())
                .build();

        userRepository.save(updatedUser);

        return UserResponseDto.builder()
                .id(updatedUser.getId())
                .picture(updatedUser.getPicture())
                .word(updatedUser.getWord())
                .letter(updatedUser.getLetter())
                .build();
    }
}
