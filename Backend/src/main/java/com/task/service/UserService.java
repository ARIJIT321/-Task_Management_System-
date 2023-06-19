package com.task.service;

import com.task.exception.UserException;
import com.task.model.User;

public interface UserService {

    public User registerUser(User user) throws UserException;

    public User loginUser(User user) throws UserException;


}
