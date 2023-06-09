import { Step } from "src/app/home/components/models";

export const STEPS: Step[] = [
    {
      id: 'step-1',
      name: 'Step 1',
      description: 'This is the first step',
      icon: 'fa fa-check',
      color: '#00bcd4',
      tasks: [
        {
          id: 'task-1',
          name: 'Task 1',
          description: 'Do something',
          priority: 1,
          finish: false,
          date_limit: '2022-12-31',
          subtask: [
            {
              id: 'subtask-1',
              name: 'Subtask 1',
              description: 'Do this first',
              priority: 1,
              finish: false,
              date_limit: '2022-12-31',
            },
            {
              id: 'subtask-2',
              name: 'Subtask 2',
              description: 'Do this next',
              priority: 2,
              finish: false,
              date_limit: '2022-12-31',
            },
          ],
        },
        {
          id: 'task-2',
          name: 'Task 2',
          description: 'Do something else',
          priority: 2,
          finish: false,
          date_limit: '2022-12-31',
          subtask: [
            {
              id: 'subtask-1',
              name: 'Subtask 1',
              description: 'Do this first',
              priority: 1,
              finish: false,
              date_limit: '2022-12-31',
            },
            {
              id: 'subtask-2',
              name: 'Subtask 2',
              description: 'Do this next',
              priority: 2,
              finish: false,
              date_limit: '2022-12-31',
            },
          ],
        },
      ],
    },
    {
      id: 'step-2',
      name: 'Step 2',
      description: 'This is the second step',
      icon: 'fa fa-cog',
      color: '#4caf50',
      tasks: [
        {
          id: 'task-1',
          name: 'Task 1',
          description: 'Do something',
          priority: 1,
          finish: false,
          date_limit: '2022-12-31',
          subtask: [
            {
              id: 'subtask-1',
              name: 'Subtask 1',
              description: 'Do this first',
              priority: 1,
              finish: false,
              date_limit: '2022-12-31',
            },
            {
              id: 'subtask-2',
              name: 'Subtask 2',
              description: 'Do this next',
              priority: 2,
              finish: false,
              date_limit: '2022-12-31',
            },
          ],
        },
        {
          id: 'task-2',
          name: 'Task 2',
          description: 'Do something else',
          priority: 2,
          finish: false,
          date_limit: '2022-12-31',
          subtask: [
            {
              id: 'subtask-1',
              name: 'Subtask 1',
              description: 'Do this first',
              priority: 1,
              finish: false,
              date_limit: '2022-12-31',
            },
            {
              id: 'subtask-2',
              name: 'Subtask 2',
              description: 'Do this next',
              priority: 2,
              finish: false,
              date_limit: '2022-12-31',
            },
          ],
        },
        {
          id: 'task-3',
          name: 'Task 3',
          description: 'Do something else again',
          priority: 3,
          finish: false,
          date_limit: '2022-12-31',
        },
      ],
    }
  ]