package com.task.service;

import com.task.exception.UserException;
import com.task.model.User;
import com.task.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepo;

    @Override
    public User registerUser(User user) throws UserException {
        User existingUser = userRepo.findByUsername(user.getUsername());
        if (existingUser != null) {
            throw  new UserException("User already exists with username"+existingUser.getUsername());
        }

        User savedUser = userRepo.save(user);
        return savedUser;
    }

    @Override
    public User loginUser(User user) throws UserException {
        User existingUser = userRepo.findByUsername(user.getUsername());
        if (existingUser == null) {
            throw new UserException("No User Found with username:- " + user.getUsername());
        }else {
            if(!existingUser.getPassword().equals(user.getPassword())){
                throw new UserException("User name or password is wrong");
            }else {
                return existingUser;
            }
        }

    }
}
