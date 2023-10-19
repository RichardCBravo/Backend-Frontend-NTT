package com.user.query.web.controller;

import com.user.query.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<?> getUserByIdIdType(@RequestParam("id") String id, @RequestParam("type") char type ) {
        logger.info("Consult user by type of identification and by identification number");
        if (id.length() < 8 || id.length() > 11) {
            String errorMessage = "El numero de identificación debe tener como minimo 8 numeros y maxiimo 11";
            logger.error(errorMessage);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }
        if (type == 'C' || type == 'P') {
            return userService.getUserByIdIdType(id, type)
                    .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                    .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
        } else {
            String errorMessage = "Parámetro 'type' debe ser 'C' o 'P'";
            logger.warn(errorMessage);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        }
    }
}
