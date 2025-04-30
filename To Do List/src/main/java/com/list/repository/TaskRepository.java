package com.list.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.list.entity.User;

@Repository
public interface TaskRepository extends MongoRepository<User,String> {
}
