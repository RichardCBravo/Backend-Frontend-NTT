package com.user.query.service;

import com.user.query.persistence.entity.UserEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    Logger logger = LoggerFactory.getLogger(UserService.class);
    private final UserEntity user = new UserEntity();

    public Optional<UserEntity> getUserByIdIdType(String id, char idType) {
        logger.info("query user with idType="+idType+ " and id="+id);
        if (this.user.getIdType() == idType && Objects.equals(this.user.getIdNumber(), id)) {
            return Optional.of(this.user);
        }
        return Optional.empty();
    }


}
