package com.candtech.jwello.repository;

import com.candtech.jwello.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {
    Project findByProjectIdentifier(String projectIdentifer);

    @Override
    Iterable<Project> findAll();
}
