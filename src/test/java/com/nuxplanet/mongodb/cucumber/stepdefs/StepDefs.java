package com.nuxplanet.mongodb.cucumber.stepdefs;

import com.nuxplanet.mongodb.MongodbApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = MongodbApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
