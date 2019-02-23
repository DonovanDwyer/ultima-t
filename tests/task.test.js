import * as Task from '../components/task';

describe('task methods', () => {

  const testTask = {task: 'cure world hunger', duration: null, startTime: null};

  it('creates a task object when called', () => {
    expect(Task.initTask('clean house')).toEqual({task: 'clean house',
    duration: null, startTime: null});
  });

  it('edits task name', () => {
    expect(Task.editTaskName(testTask, 'achieve world domination')).toEqual({
      task: 'achieve world domination', duration: null, startTime: null});
  })

  it('add duration to task', () => {
    expect(Task.setTaskDuration(testTask, 15)).toEqual({
      task: 'cure world hunger', duration: 15, startTime: null});
  })

  it('add startTime to task', () => {
    const time = 'Saturday at High Noon Sharp';
    expect(Task.setStartTime(testTask, time)).toEqual({
      task: 'cure world hunger', duration: null, startTime: time});
  })

})
