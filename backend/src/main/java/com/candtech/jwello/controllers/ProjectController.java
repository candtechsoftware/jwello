package com.candtech.jwello.controllers;

import com.candtech.jwello.domain.Project;
import com.candtech.jwello.services.ErrorServiceMap;
import com.candtech.jwello.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
@CrossOrigin
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ErrorServiceMap errorServiceMap;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){
        ResponseEntity<?> errMap = errorServiceMap.ErrorServiceMap(result);

        if (errMap != null) return errMap;

        Project project1 =  projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }

    @GetMapping("/{identifier}")
    public ResponseEntity<?> getProjectByIdentifier(@PathVariable String identifier){
        Project project = projectService.findProjectByIdentifier(identifier);
        return new ResponseEntity<Project>(project, HttpStatus.OK);

    }

    @GetMapping("/all")
    public Iterable<?> findAllProjects(){
        return projectService.findAllProjects();
    }

    @DeleteMapping("/{identifier}")
    public ResponseEntity<?> deleteProject(@PathVariable String identifier){
        projectService.deleteProjectByIdentifier(identifier);
        return  new ResponseEntity<String>("Project: " + identifier + " deleted", HttpStatus.OK);
    }
}
