import React, { Component } from 'react';

export function initTask(taskName){
  return { 'task': taskName, 'duration': null, 'startTime': null }
};

export function setTaskDuration(taskObj, duration){
  return Object.assign({}, taskObj, { 'duration': duration });
};

export function setStartTime(taskObj, startTime){
  return Object.assign({}, taskObj, { 'startTime': startTime });
};

export function editTaskName(taskObj, newTaskName){
  return Object.assign({}, taskObj, { 'task': newTaskName });
};
