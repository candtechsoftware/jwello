package com.candtech.jwello.services;

import com.candtech.jwello.domain.Project;
import com.candtech.jwello.exceptions.ProjectIdException;
import com.candtech.jwello.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException("Project ID: " + project.getProjectIdentifier().toUpperCase() + " already created");
        }
    }
}
