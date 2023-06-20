package com.task.controller;

import com.task.exception.UserException;
import com.task.model.User;
import com.task.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    public ResponseEntity<User> resisterUser(@RequestBody User user) throws UserException {
        User registeredUser = userService.registerUser(user);

        return new ResponseEntity<User>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/userLogin")
    public ResponseEntity<User> loginUser(@RequestBody User user) throws UserException {
        User loginUser = userService.loginUser(user);

        return new ResponseEntity<User>(loginUser, HttpStatus.ACCEPTED);
    }
}
