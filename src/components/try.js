import React from 'react';
import { RFC_2822 } from 'moment';

export const Try = () => {
  const res = {
    data: {
      id: '28',
      job: {
        id: '26',
        title: 'Job #1 modified',
        description: 'description of the job #1',
        accept_interviews_from: '2020-08-09 20:12:00',
        accept_interviews_until: '2020-09-01 18:12:00',
        interview_duration: '5000',
        recruiter_id: '16',
      },
      status: 'not selected',
      feedback: {
        'Skill #1': {
          links: [
            'https://www.coursera.org/search?query=Skill%20#1',
            'https://www.udemy.com/courses/search/?q=Skill+#1',
            'https://www.pluralsight.com/search?q=Skill%20#1',
            'https://www.lynda.com/search?q=Skill%20#1',
          ],
          summary:
            'A skill is the ability to perform an action with determined results often within a given amount of time, energy, or both. Skills can often be divided into domain-general and domain-specific skills. For example, in the domain of work, some general skills would include time management, teamwork and leadership, self-motivation and others, whereas domain-specific skills would be used only for a certain job. Skill usually requires certain environmental stimuli and situations to assess the level of skill being shown and used.\nPeople need a broad range of skills to contribute to the modern economy. A joint ASTD and U.S. Department of Labor study showed that through technology, the workplace is changing, and identified 16 basic skills that employees must have to be able to change with it. Three broad categories of skills are suggested and these are technical, human, and conceptual. The first two can be substituted with hard and soft skills, respectively.',
        },
        'Skill #2': {
          links: [
            'https://www.coursera.org/search?query=Skill%20#2',
            'https://www.udemy.com/courses/search/?q=Skill+#2',
            'https://www.pluralsight.com/search?q=Skill%20#2',
            'https://www.lynda.com/search?q=Skill%20#2',
          ],
          summary:
            'A skill is the ability to perform an action with determined results often within a given amount of time, energy, or both. Skills can often be divided into domain-general and domain-specific skills. For example, in the domain of work, some general skills would include time management, teamwork and leadership, self-motivation and others, whereas domain-specific skills would be used only for a certain job. Skill usually requires certain environmental stimuli and situations to assess the level of skill being shown and used.\nPeople need a broad range of skills to contribute to the modern economy. A joint ASTD and U.S. Department of Labor study showed that through technology, the workplace is changing, and identified 16 basic skills that employees must have to be able to change with it. Three broad categories of skills are suggested and these are technical, human, and conceptual. The first two can be substituted with hard and soft skills, respectively.',
        },
      },
      submitted_at: '2020-08-12 04:35:54',
      created_at: '2020-08-12 03:12:34',
      updated_at: '2020-08-12 08:08:52',
    },
  };
  let x;
  let i, w;
  let arr = [];
  let summary = [];
  console.log('Try: ', res.data.feedback);

  for (i in res.data.feedback) {
    console.log('re:', i);
    summary.push(res.data.feedback[i].summary);
    for (x in res.data.feedback[i].links) {
      console.log('x: ', res.data.feedback[i].links[x]);
      arr.push(res.data.feedback[i].links[x]);
    }
  }

  return (
    <div>
      {arr.map((res) => (
        <p>{res}</p>
      ))}
    </div>
  );
};
