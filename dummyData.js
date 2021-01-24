export const dummyData = {
  data: [
    {
      id: 'a84a5bdb-0894-4b37-9955-34575171a063',
      event_id: '9a9c5a7a-b574-43b5-996c-28b6ec01dd3a',
      event_type: 'form_response',
      restaurant: {
        id: '8df2d9c6-4f04-47fa-a95f-d878d06560b4',
        label: 'Slurp',
      },
      form_response: {
        form_id: 'OXor8w',
        token: 'f114a65b-7e6e-4ad5-9354-7946f6601de8',
        landed_at: '2020-10-15T20:51:52.738Z',
        submitted_at: '2020-10-15T20:56:52.738Z',
        definition: {
          id: 'OXor8w',
          title: 'Application Form - anna staging',
          fields: [
            {
              id: 'cY1AKL0dwxhI',
              title: "Let's break the ice, what's your *first name*?",
              type: 'short_text',
              ref: 'application_firstname',
              properties: {},
            },
            {
              id: 'F4ojF19MV52r',
              title:
                'Hey {{field:application_firstname}}, how about your *last name*?',
              type: 'short_text',
              ref: 'application_lastname',
              properties: {},
            },
            {
              id: 'u7Wp1UIrMprx',
              title:
                'Most important question, *why* would you like to join the team?',
              type: 'short_text',
              ref: 'application_motivation',
              properties: {},
            },
            {
              id: 'wiK6DzdkRegG',
              title:
                'Sounds great! Can you introduce yourself in one sentence?',
              type: 'short_text',
              ref: 'application_self_intro',
              properties: {},
            },
            {
              id: 'bEWX6jrwYbC3',
              title: 'Well, well, well. *Where* would you like to work?',
              type: 'multiple_choice',
              ref: 'application_position',
              properties: {},
              choices: [
                {id: 'viLK4wlv8JSS', label: 'Kitchen'},
                {id: 'DrqrS4Ya4QJV', label: 'Front of House'},
                {id: 'gO4Y8JZon1Xv', label: 'Bakery'},
                {
                  id: 'Yzsww0opEN4I',
                  label: 'U18 team member (select if between 16-18 years old)',
                },
                {id: 'YqGuXu1T3imi', label: 'Administrative'},
                {id: 'Vi0FnDY5gQd9', label: 'Internship - Kitchen'},
                {id: 'qJQQ8gzbpjBn', label: 'Internship - Front of House'},
                {id: 'XG0WKt4aNDwg', label: 'Crew Member'},
              ],
            },
            {
              id: 'qGS1qAaGFKAu',
              title:
                'Which position in the *front of house* are you applying for?',
              type: 'multiple_choice',
              ref: 'application_position_foh',
              properties: {},
              choices: [
                {id: 'GZqTFt9LFJtw', label: 'Server'},
                {id: 'zTvboj6Imn3C', label: 'Restaurant Manager'},
              ],
            },
            {
              id: 'l7rd6GLUASnd',
              title: 'Do you want to work *full- or part-time*?',
              type: 'multiple_choice',
              ref: 'application_workhours',
              properties: {},
              choices: [
                {id: 'HBVTHxthl9U5', label: 'Full-time (37.5h weekly)'},
                {id: 'rPCuu2HSyZtw', label: 'Part-time (15-20h weekly)'},
                {id: 'Xe4n6kZwDZmy', label: 'Part-time or Full-time'},
                {id: 'oxzKDbekZsJX', label: 'Internship'},
              ],
            },
            {
              id: 'mSWabOnBNxO4',
              title: 'From what day are you *available* to start?',
              type: 'date',
              ref: 'application_start_date',
              properties: {},
            },
            {
              id: 'Et0Arf4DNGjA',
              title: 'Wine knowledge you got it?',
              type: 'long_text',
              ref: 'application_wine_knowledge',
              properties: {},
            },
            {
              id: 'Mf1gKBOlM0cH',
              title:
                'Do you have a Danish *work visa* and if so how many hours can you work per week?',
              type: 'multiple_choice',
              ref: 'application_visa_type',
              properties: {},
              choices: [
                {id: 'dYitAQM4E2Jv', label: 'EU/DK Citizen - Unlimited'},
                {
                  id: 'SyOJeOOxppPP',
                  label: 'Unrestricted Full Visa - 37.5 Hours',
                },
                {id: 'ja76ahHwIm7K', label: 'Work Holiday Visa - 37.5'},
                {id: 'HIsNuTjwgJUf', label: 'Restricted Visa 15 Hours'},
                {id: 'xpFIgnFmkeu8', label: 'No Visa'},
              ],
            },
            {
              id: 'rLsKTwtA17su',
              title:
                'What are the names of the last 3 *places that you worked at*? What was your *role*? How *long* were you at each? ',
              type: 'long_text',
              ref: 'application_work_experience',
              properties: {},
            },
            {
              id: 'GLYs8Gp0JO2v',
              title:
                'Which *languages* do you speak well enough to chat with guests?',
              type: 'multiple_choice',
              allow_multiple_selections: true,
              allow_other_choice: true,
              ref: 'application_spoken_languages',
              properties: {},
              choices: [
                {id: 'eMdsM7y9NP0z', label: 'English'},
                {id: 'HqBAsaLdyIuF', label: 'Danish'},
                {id: 'JuCjOZSTVlZM', label: 'Spanish'},
                {id: 'U19AUb4VAugp', label: 'Italian'},
              ],
            },
            {
              id: 'BwWBgiPM9z6g',
              title: 'Before we forget, please upload your *CV* here. ',
              type: 'file_upload',
              ref: 'application_cv',
              properties: {},
            },
            {
              id: 'epOKy5MsQpZm',
              title:
                "Also please leave us a *picture* to make it easier for us to recognize you if you're coming for an interview. Thanks!",
              type: 'file_upload',
              ref: 'application_profile_picture',
              properties: {},
            },
            {
              id: 'IBKDi1uxPQO3',
              title:
                "Looking great, what's your *phone number* so we can reach you?",
              type: 'phone_number',
              ref: 'application_phone_number',
              properties: {},
            },
            {
              id: 'ugDOlIVxJqQy',
              title:
                'Was a pleasure {{field:application_firstname}}! What is your *mail* so we can reach you?',
              type: 'email',
              ref: 'application_email',
              properties: {},
            },
            {
              id: 'Ieoc0nURdQTB',
              title:
                "By the way, if we don't have an open position now, would you like us to share your application with restaurants similar to *RESTAURANT NAME* so they can contact you for open positions?",
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
              properties: {},
              choices: [
                {id: 'm3OaL0R34AWY', label: 'Yes, please.'},
                {id: 'hEk8ITHSCvnP', label: 'No.'},
              ],
            },
          ],
        },
        answers: [
          {
            type: 'text',
            text: 'Javier',
            field: {
              id: 'cY1AKL0dwxhI',
              type: 'short_text',
              ref: 'application_firstname',
            },
          },
          {
            type: 'text',
            text: 'Dicki',
            field: {
              id: 'F4ojF19MV52r',
              type: 'short_text',
              ref: 'application_lastname',
            },
          },
          {
            type: 'text',
            text:
              'I am very motivated because of whiteboard cross-media communities and also I like implement wireless platforms',
            field: {
              id: 'u7Wp1UIrMprx',
              type: 'short_text',
              ref: 'application_motivation',
            },
          },
          {
            type: 'text',
            text:
              'I have been working with zero administration apps in a Implemented company and what I what really liked was cultivate wireless initiatives',
            field: {
              id: 'wiK6DzdkRegG',
              type: 'short_text',
              ref: 'application_self_intro',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Internship - Kitchen'},
            field: {
              id: 'bEWX6jrwYbC3',
              type: 'multiple_choice',
              ref: 'application_position',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Server'},
            field: {
              id: 'qGS1qAaGFKAu',
              type: 'multiple_choice',
              ref: 'application_position_foh',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Part-time (15-20h weekly)'},
            field: {
              id: 'l7rd6GLUASnd',
              type: 'multiple_choice',
              ref: 'application_workhours',
            },
          },
          {
            type: 'date',
            date: '2020-11-14',
            field: {
              id: 'mSWabOnBNxO4',
              type: 'date',
              ref: 'application_start_date',
            },
          },
          {
            type: 'text',
            text: 'Barolos',
            field: {
              id: 'Et0Arf4DNGjA',
              type: 'long_text',
              ref: 'application_wine_knowledge',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Restricted Visa 15 Hours'},
            field: {
              id: 'Mf1gKBOlM0cH',
              type: 'multiple_choice',
              ref: 'application_visa_type',
            },
          },
          {
            type: 'text',
            text:
              "\nLead Quality Officer as Designer at Kling, Dicki and Cronin for 4 years /\nInvestor Tactics Technician as Officer at Dooley - Treutel for 1 years / \nProduct Data Officer as Facilitator at Ebert - O'Keefe for 2 years",
            field: {
              id: 'rLsKTwtA17su',
              type: 'long_text',
              ref: 'application_work_experience',
            },
          },
          {
            type: 'choices',
            choices: {labels: ['Spanish']},
            field: {
              id: 'GLYs8Gp0JO2v',
              type: 'multiple_choice',
              ref: 'application_spoken_languages',
            },
          },
          {
            type: 'file_url',
            file_url: 'https://gorgeous.jpe',
            field: {
              id: 'BwWBgiPM9z6g',
              type: 'file_upload',
              ref: 'application_cv',
            },
          },
          {
            type: 'file_url',
            file_url: 'http://placeimg.com/640/480/people',
            field: {
              id: 'epOKy5MsQpZm',
              type: 'file_upload',
              ref: 'application_profile_picture',
            },
          },
          {
            type: 'phone_number',
            phone_number: '+4519700436',
            field: {
              id: 'IBKDi1uxPQO3',
              type: 'phone_number',
              ref: 'application_phone_number',
            },
          },
          {
            type: 'email',
            email: 'Bryon66@yahoo.com',
            field: {
              id: 'ugDOlIVxJqQy',
              type: 'email',
              ref: 'application_email',
            },
          },
          {
            type: 'choice',
            choice: {label: 'No.'},
            field: {
              id: 'Ieoc0nURdQTB',
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
            },
          },
        ],
      },
    },
    {
      id: '604c6c2d-f1b3-4f9d-8456-1a6e38c0bb6a',
      event_id: '6625c12d-2577-4661-9d97-d4c6a9b44600',
      event_type: 'form_response',
      restaurant: {
        id: '0eb56568-d223-47e6-91c7-62fbbeb754ec',
        label: 'McDonalds',
      },
      form_response: {
        form_id: 'OXor8w',
        token: '75264fc8-f515-469a-8961-16f9793e4ee9',
        landed_at: '2020-10-15T20:52:28.603Z',
        submitted_at: '2020-10-15T20:57:28.603Z',
        definition: {
          id: 'OXor8w',
          title: 'Application Form - anna staging',
          fields: [
            {
              id: 'cY1AKL0dwxhI',
              title: "Let's break the ice, what's your *first name*?",
              type: 'short_text',
              ref: 'application_firstname',
              properties: {},
            },
            {
              id: 'F4ojF19MV52r',
              title:
                'Hey {{field:application_firstname}}, how about your *last name*?',
              type: 'short_text',
              ref: 'application_lastname',
              properties: {},
            },
            {
              id: 'u7Wp1UIrMprx',
              title:
                'Most important question, *why* would you like to join the team?',
              type: 'short_text',
              ref: 'application_motivation',
              properties: {},
            },
            {
              id: 'wiK6DzdkRegG',
              title:
                'Sounds great! Can you introduce yourself in one sentence?',
              type: 'short_text',
              ref: 'application_self_intro',
              properties: {},
            },
            {
              id: 'bEWX6jrwYbC3',
              title: 'Well, well, well. *Where* would you like to work?',
              type: 'multiple_choice',
              ref: 'application_position',
              properties: {},
              choices: [
                {id: 'viLK4wlv8JSS', label: 'Kitchen'},
                {id: 'DrqrS4Ya4QJV', label: 'Front of House'},
                {id: 'gO4Y8JZon1Xv', label: 'Bakery'},
                {
                  id: 'Yzsww0opEN4I',
                  label: 'U18 team member (select if between 16-18 years old)',
                },
                {id: 'YqGuXu1T3imi', label: 'Administrative'},
                {id: 'Vi0FnDY5gQd9', label: 'Internship - Kitchen'},
                {id: 'qJQQ8gzbpjBn', label: 'Internship - Front of House'},
                {id: 'XG0WKt4aNDwg', label: 'Crew Member'},
              ],
            },
            {
              id: 'qGS1qAaGFKAu',
              title:
                'Which position in the *front of house* are you applying for?',
              type: 'multiple_choice',
              ref: 'application_position_foh',
              properties: {},
              choices: [
                {id: 'GZqTFt9LFJtw', label: 'Server'},
                {id: 'zTvboj6Imn3C', label: 'Restaurant Manager'},
              ],
            },
            {
              id: 'l7rd6GLUASnd',
              title: 'Do you want to work *full- or part-time*?',
              type: 'multiple_choice',
              ref: 'application_workhours',
              properties: {},
              choices: [
                {id: 'HBVTHxthl9U5', label: 'Full-time (37.5h weekly)'},
                {id: 'rPCuu2HSyZtw', label: 'Part-time (15-20h weekly)'},
                {id: 'Xe4n6kZwDZmy', label: 'Part-time or Full-time'},
                {id: 'oxzKDbekZsJX', label: 'Internship'},
              ],
            },
            {
              id: 'mSWabOnBNxO4',
              title: 'From what day are you *available* to start?',
              type: 'date',
              ref: 'application_start_date',
              properties: {},
            },
            {
              id: 'Et0Arf4DNGjA',
              title: 'Wine knowledge you got it?',
              type: 'long_text',
              ref: 'application_wine_knowledge',
              properties: {},
            },
            {
              id: 'Mf1gKBOlM0cH',
              title:
                'Do you have a Danish *work visa* and if so how many hours can you work per week?',
              type: 'multiple_choice',
              ref: 'application_visa_type',
              properties: {},
              choices: [
                {id: 'dYitAQM4E2Jv', label: 'EU/DK Citizen - Unlimited'},
                {
                  id: 'SyOJeOOxppPP',
                  label: 'Unrestricted Full Visa - 37.5 Hours',
                },
                {id: 'ja76ahHwIm7K', label: 'Work Holiday Visa - 37.5'},
                {id: 'HIsNuTjwgJUf', label: 'Restricted Visa 15 Hours'},
                {id: 'xpFIgnFmkeu8', label: 'No Visa'},
              ],
            },
            {
              id: 'rLsKTwtA17su',
              title:
                'What are the names of the last 3 *places that you worked at*? What was your *role*? How *long* were you at each? ',
              type: 'long_text',
              ref: 'application_work_experience',
              properties: {},
            },
            {
              id: 'GLYs8Gp0JO2v',
              title:
                'Which *languages* do you speak well enough to chat with guests?',
              type: 'multiple_choice',
              allow_multiple_selections: true,
              allow_other_choice: true,
              ref: 'application_spoken_languages',
              properties: {},
              choices: [
                {id: 'eMdsM7y9NP0z', label: 'English'},
                {id: 'HqBAsaLdyIuF', label: 'Danish'},
                {id: 'JuCjOZSTVlZM', label: 'Spanish'},
                {id: 'U19AUb4VAugp', label: 'Italian'},
              ],
            },
            {
              id: 'BwWBgiPM9z6g',
              title: 'Before we forget, please upload your *CV* here. ',
              type: 'file_upload',
              ref: 'application_cv',
              properties: {},
            },
            {
              id: 'epOKy5MsQpZm',
              title:
                "Also please leave us a *picture* to make it easier for us to recognize you if you're coming for an interview. Thanks!",
              type: 'file_upload',
              ref: 'application_profile_picture',
              properties: {},
            },
            {
              id: 'IBKDi1uxPQO3',
              title:
                "Looking great, what's your *phone number* so we can reach you?",
              type: 'phone_number',
              ref: 'application_phone_number',
              properties: {},
            },
            {
              id: 'ugDOlIVxJqQy',
              title:
                'Was a pleasure {{field:application_firstname}}! What is your *mail* so we can reach you?',
              type: 'email',
              ref: 'application_email',
              properties: {},
            },
            {
              id: 'Ieoc0nURdQTB',
              title:
                "By the way, if we don't have an open position now, would you like us to share your application with restaurants similar to *RESTAURANT NAME* so they can contact you for open positions?",
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
              properties: {},
              choices: [
                {id: 'm3OaL0R34AWY', label: 'Yes, please.'},
                {id: 'hEk8ITHSCvnP', label: 'No.'},
              ],
            },
          ],
        },
        answers: [
          {
            type: 'text',
            text: 'Gilberto',
            field: {
              id: 'cY1AKL0dwxhI',
              type: 'short_text',
              ref: 'application_firstname',
            },
          },
          {
            type: 'text',
            text: 'Kuhic',
            field: {
              id: 'F4ojF19MV52r',
              type: 'short_text',
              ref: 'application_lastname',
            },
          },
          {
            type: 'text',
            text:
              'I am very motivated because of evolve B2B infomediaries and also I like enable viral initiatives',
            field: {
              id: 'u7Wp1UIrMprx',
              type: 'short_text',
              ref: 'application_motivation',
            },
          },
          {
            type: 'text',
            text:
              'I have been working with national apps in a Re-contextualized company and what I what really liked was brand best-of-breed metrics',
            field: {
              id: 'wiK6DzdkRegG',
              type: 'short_text',
              ref: 'application_self_intro',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Bakery'},
            field: {
              id: 'bEWX6jrwYbC3',
              type: 'multiple_choice',
              ref: 'application_position',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Restaurant Manager'},
            field: {
              id: 'qGS1qAaGFKAu',
              type: 'multiple_choice',
              ref: 'application_position_foh',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Full-time (37.5h weekly)'},
            field: {
              id: 'l7rd6GLUASnd',
              type: 'multiple_choice',
              ref: 'application_workhours',
            },
          },
          {
            type: 'date',
            date: '2020-11-14',
            field: {
              id: 'mSWabOnBNxO4',
              type: 'date',
              ref: 'application_start_date',
            },
          },
          {
            type: 'text',
            text: 'Barolos',
            field: {
              id: 'Et0Arf4DNGjA',
              type: 'long_text',
              ref: 'application_wine_knowledge',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Restricted Visa 15 Hours'},
            field: {
              id: 'Mf1gKBOlM0cH',
              type: 'multiple_choice',
              ref: 'application_visa_type',
            },
          },
          {
            type: 'text',
            text:
              '\nPrincipal Operations Representative as Designer at Leannon and Sons for 4 years /\nLegacy Metrics Specialist as Technician at Franecki - Wehner for 3 years / \nInvestor Quality Manager as Assistant at Cummings Group for 3 years',
            field: {
              id: 'rLsKTwtA17su',
              type: 'long_text',
              ref: 'application_work_experience',
            },
          },
          {
            type: 'choices',
            choices: {labels: ['Spanish']},
            field: {
              id: 'GLYs8Gp0JO2v',
              type: 'multiple_choice',
              ref: 'application_spoken_languages',
            },
          },
          {
            type: 'file_url',
            file_url: 'https://associate_customer_chair.png',
            field: {
              id: 'BwWBgiPM9z6g',
              type: 'file_upload',
              ref: 'application_cv',
            },
          },
          {
            type: 'file_url',
            file_url: 'http://placeimg.com/640/480/people',
            field: {
              id: 'epOKy5MsQpZm',
              type: 'file_upload',
              ref: 'application_profile_picture',
            },
          },
          {
            type: 'phone_number',
            phone_number: '+4550018280',
            field: {
              id: 'IBKDi1uxPQO3',
              type: 'phone_number',
              ref: 'application_phone_number',
            },
          },
          {
            type: 'email',
            email: 'Hoyt58@yahoo.com',
            field: {
              id: 'ugDOlIVxJqQy',
              type: 'email',
              ref: 'application_email',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Yes, please.'},
            field: {
              id: 'Ieoc0nURdQTB',
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
            },
          },
        ],
      },
    },
    {
      id: '1e4b6536-26d1-44f9-b7e5-1b70f4aebd40',
      event_id: '5e58e382-2145-4f23-bc6f-1825836a1065',
      event_type: 'form_response',
      restaurant: {
        id: '0eb56568-d223-47e6-91c7-62fbbeb754ec',
        label: 'McDonalds',
      },
      form_response: {
        form_id: 'OXor8w',
        token: 'cd16b27b-ec48-4bdd-9a56-93c648f20db5',
        landed_at: '2020-10-15T20:53:05.816Z',
        submitted_at: '2020-10-15T20:58:05.816Z',
        definition: {
          id: 'OXor8w',
          title: 'Application Form - anna staging',
          fields: [
            {
              id: 'cY1AKL0dwxhI',
              title: "Let's break the ice, what's your *first name*?",
              type: 'short_text',
              ref: 'application_firstname',
              properties: {},
            },
            {
              id: 'F4ojF19MV52r',
              title:
                'Hey {{field:application_firstname}}, how about your *last name*?',
              type: 'short_text',
              ref: 'application_lastname',
              properties: {},
            },
            {
              id: 'u7Wp1UIrMprx',
              title:
                'Most important question, *why* would you like to join the team?',
              type: 'short_text',
              ref: 'application_motivation',
              properties: {},
            },
            {
              id: 'wiK6DzdkRegG',
              title:
                'Sounds great! Can you introduce yourself in one sentence?',
              type: 'short_text',
              ref: 'application_self_intro',
              properties: {},
            },
            {
              id: 'bEWX6jrwYbC3',
              title: 'Well, well, well. *Where* would you like to work?',
              type: 'multiple_choice',
              ref: 'application_position',
              properties: {},
              choices: [
                {id: 'viLK4wlv8JSS', label: 'Kitchen'},
                {id: 'DrqrS4Ya4QJV', label: 'Front of House'},
                {id: 'gO4Y8JZon1Xv', label: 'Bakery'},
                {
                  id: 'Yzsww0opEN4I',
                  label: 'U18 team member (select if between 16-18 years old)',
                },
                {id: 'YqGuXu1T3imi', label: 'Administrative'},
                {id: 'Vi0FnDY5gQd9', label: 'Internship - Kitchen'},
                {id: 'qJQQ8gzbpjBn', label: 'Internship - Front of House'},
                {id: 'XG0WKt4aNDwg', label: 'Crew Member'},
              ],
            },
            {
              id: 'qGS1qAaGFKAu',
              title:
                'Which position in the *front of house* are you applying for?',
              type: 'multiple_choice',
              ref: 'application_position_foh',
              properties: {},
              choices: [
                {id: 'GZqTFt9LFJtw', label: 'Server'},
                {id: 'zTvboj6Imn3C', label: 'Restaurant Manager'},
              ],
            },
            {
              id: 'l7rd6GLUASnd',
              title: 'Do you want to work *full- or part-time*?',
              type: 'multiple_choice',
              ref: 'application_workhours',
              properties: {},
              choices: [
                {id: 'HBVTHxthl9U5', label: 'Full-time (37.5h weekly)'},
                {id: 'rPCuu2HSyZtw', label: 'Part-time (15-20h weekly)'},
                {id: 'Xe4n6kZwDZmy', label: 'Part-time or Full-time'},
                {id: 'oxzKDbekZsJX', label: 'Internship'},
              ],
            },
            {
              id: 'mSWabOnBNxO4',
              title: 'From what day are you *available* to start?',
              type: 'date',
              ref: 'application_start_date',
              properties: {},
            },
            {
              id: 'Et0Arf4DNGjA',
              title: 'Wine knowledge you got it?',
              type: 'long_text',
              ref: 'application_wine_knowledge',
              properties: {},
            },
            {
              id: 'Mf1gKBOlM0cH',
              title:
                'Do you have a Danish *work visa* and if so how many hours can you work per week?',
              type: 'multiple_choice',
              ref: 'application_visa_type',
              properties: {},
              choices: [
                {id: 'dYitAQM4E2Jv', label: 'EU/DK Citizen - Unlimited'},
                {
                  id: 'SyOJeOOxppPP',
                  label: 'Unrestricted Full Visa - 37.5 Hours',
                },
                {id: 'ja76ahHwIm7K', label: 'Work Holiday Visa - 37.5'},
                {id: 'HIsNuTjwgJUf', label: 'Restricted Visa 15 Hours'},
                {id: 'xpFIgnFmkeu8', label: 'No Visa'},
              ],
            },
            {
              id: 'rLsKTwtA17su',
              title:
                'What are the names of the last 3 *places that you worked at*? What was your *role*? How *long* were you at each? ',
              type: 'long_text',
              ref: 'application_work_experience',
              properties: {},
            },
            {
              id: 'GLYs8Gp0JO2v',
              title:
                'Which *languages* do you speak well enough to chat with guests?',
              type: 'multiple_choice',
              allow_multiple_selections: true,
              allow_other_choice: true,
              ref: 'application_spoken_languages',
              properties: {},
              choices: [
                {id: 'eMdsM7y9NP0z', label: 'English'},
                {id: 'HqBAsaLdyIuF', label: 'Danish'},
                {id: 'JuCjOZSTVlZM', label: 'Spanish'},
                {id: 'U19AUb4VAugp', label: 'Italian'},
              ],
            },
            {
              id: 'BwWBgiPM9z6g',
              title: 'Before we forget, please upload your *CV* here. ',
              type: 'file_upload',
              ref: 'application_cv',
              properties: {},
            },
            {
              id: 'epOKy5MsQpZm',
              title:
                "Also please leave us a *picture* to make it easier for us to recognize you if you're coming for an interview. Thanks!",
              type: 'file_upload',
              ref: 'application_profile_picture',
              properties: {},
            },
            {
              id: 'IBKDi1uxPQO3',
              title:
                "Looking great, what's your *phone number* so we can reach you?",
              type: 'phone_number',
              ref: 'application_phone_number',
              properties: {},
            },
            {
              id: 'ugDOlIVxJqQy',
              title:
                'Was a pleasure {{field:application_firstname}}! What is your *mail* so we can reach you?',
              type: 'email',
              ref: 'application_email',
              properties: {},
            },
            {
              id: 'Ieoc0nURdQTB',
              title:
                "By the way, if we don't have an open position now, would you like us to share your application with restaurants similar to *RESTAURANT NAME* so they can contact you for open positions?",
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
              properties: {},
              choices: [
                {id: 'm3OaL0R34AWY', label: 'Yes, please.'},
                {id: 'hEk8ITHSCvnP', label: 'No.'},
              ],
            },
          ],
        },
        answers: [
          {
            type: 'text',
            text: 'Holly',
            field: {
              id: 'cY1AKL0dwxhI',
              type: 'short_text',
              ref: 'application_firstname',
            },
          },
          {
            type: 'text',
            text: 'Price',
            field: {
              id: 'F4ojF19MV52r',
              type: 'short_text',
              ref: 'application_lastname',
            },
          },
          {
            type: 'text',
            text:
              'I am very motivated because of integrate ubiquitous e-tailers and also I like reinvent leading-edge synergies',
            field: {
              id: 'u7Wp1UIrMprx',
              type: 'short_text',
              ref: 'application_motivation',
            },
          },
          {
            type: 'text',
            text:
              'I have been working with cohesive apps in a Mandatory company and what I what really liked was cultivate granular content',
            field: {
              id: 'wiK6DzdkRegG',
              type: 'short_text',
              ref: 'application_self_intro',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Front of House'},
            field: {
              id: 'bEWX6jrwYbC3',
              type: 'multiple_choice',
              ref: 'application_position',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Restaurant Manager'},
            field: {
              id: 'qGS1qAaGFKAu',
              type: 'multiple_choice',
              ref: 'application_position_foh',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Part-time (15-20h weekly)'},
            field: {
              id: 'l7rd6GLUASnd',
              type: 'multiple_choice',
              ref: 'application_workhours',
            },
          },
          {
            type: 'date',
            date: '2020-11-14',
            field: {
              id: 'mSWabOnBNxO4',
              type: 'date',
              ref: 'application_start_date',
            },
          },
          {
            type: 'text',
            text: 'Barolos',
            field: {
              id: 'Et0Arf4DNGjA',
              type: 'long_text',
              ref: 'application_wine_knowledge',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Work Holiday Visa - 37.5'},
            field: {
              id: 'Mf1gKBOlM0cH',
              type: 'multiple_choice',
              ref: 'application_visa_type',
            },
          },
          {
            type: 'text',
            text:
              '\nInternal Accountability Technician as Producer at Carter, Kuvalis and Green for 2 years /\nInternational Integration Specialist as Executive at Jenkins LLC for 1 years / \nInternal Optimization Coordinator as Specialist at Aufderhar, Satterfield and Buckridge for 4 years',
            field: {
              id: 'rLsKTwtA17su',
              type: 'long_text',
              ref: 'application_work_experience',
            },
          },
          {
            type: 'choices',
            choices: {labels: ['Danish']},
            field: {
              id: 'GLYs8Gp0JO2v',
              type: 'multiple_choice',
              ref: 'application_spoken_languages',
            },
          },
          {
            type: 'file_url',
            file_url: 'https://leu_policy.wav',
            field: {
              id: 'BwWBgiPM9z6g',
              type: 'file_upload',
              ref: 'application_cv',
            },
          },
          {
            type: 'file_url',
            file_url: 'http://placeimg.com/640/480/people',
            field: {
              id: 'epOKy5MsQpZm',
              type: 'file_upload',
              ref: 'application_profile_picture',
            },
          },
          {
            type: 'phone_number',
            phone_number: '+4554530010',
            field: {
              id: 'IBKDi1uxPQO3',
              type: 'phone_number',
              ref: 'application_phone_number',
            },
          },
          {
            type: 'email',
            email: 'Roscoe.Williamson30@yahoo.com',
            field: {
              id: 'ugDOlIVxJqQy',
              type: 'email',
              ref: 'application_email',
            },
          },
          {
            type: 'choice',
            choice: {label: 'No.'},
            field: {
              id: 'Ieoc0nURdQTB',
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
            },
          },
        ],
      },
    },
    {
      id: '2bc6a0c4-d76f-4bf3-9c9f-252147017b07',
      event_id: '5a00cda5-f88f-4f4b-a9c7-045dd0d103c8',
      event_type: 'form_response',
      restaurant: {
        id: '0eb56568-d223-47e6-91c7-62fbbeb754ec',
        label: 'McDonalds',
      },
      form_response: {
        form_id: 'OXor8w',
        token: 'b1fb16f0-8ca0-4d0b-b917-97625218245c',
        landed_at: '2020-10-15T20:53:25.045Z',
        submitted_at: '2020-10-15T20:58:25.045Z',
        definition: {
          id: 'OXor8w',
          title: 'Application Form - anna staging',
          fields: [
            {
              id: 'cY1AKL0dwxhI',
              title: "Let's break the ice, what's your *first name*?",
              type: 'short_text',
              ref: 'application_firstname',
              properties: {},
            },
            {
              id: 'F4ojF19MV52r',
              title:
                'Hey {{field:application_firstname}}, how about your *last name*?',
              type: 'short_text',
              ref: 'application_lastname',
              properties: {},
            },
            {
              id: 'u7Wp1UIrMprx',
              title:
                'Most important question, *why* would you like to join the team?',
              type: 'short_text',
              ref: 'application_motivation',
              properties: {},
            },
            {
              id: 'wiK6DzdkRegG',
              title:
                'Sounds great! Can you introduce yourself in one sentence?',
              type: 'short_text',
              ref: 'application_self_intro',
              properties: {},
            },
            {
              id: 'bEWX6jrwYbC3',
              title: 'Well, well, well. *Where* would you like to work?',
              type: 'multiple_choice',
              ref: 'application_position',
              properties: {},
              choices: [
                {id: 'viLK4wlv8JSS', label: 'Kitchen'},
                {id: 'DrqrS4Ya4QJV', label: 'Front of House'},
                {id: 'gO4Y8JZon1Xv', label: 'Bakery'},
                {
                  id: 'Yzsww0opEN4I',
                  label: 'U18 team member (select if between 16-18 years old)',
                },
                {id: 'YqGuXu1T3imi', label: 'Administrative'},
                {id: 'Vi0FnDY5gQd9', label: 'Internship - Kitchen'},
                {id: 'qJQQ8gzbpjBn', label: 'Internship - Front of House'},
                {id: 'XG0WKt4aNDwg', label: 'Crew Member'},
              ],
            },
            {
              id: 'qGS1qAaGFKAu',
              title:
                'Which position in the *front of house* are you applying for?',
              type: 'multiple_choice',
              ref: 'application_position_foh',
              properties: {},
              choices: [
                {id: 'GZqTFt9LFJtw', label: 'Server'},
                {id: 'zTvboj6Imn3C', label: 'Restaurant Manager'},
              ],
            },
            {
              id: 'l7rd6GLUASnd',
              title: 'Do you want to work *full- or part-time*?',
              type: 'multiple_choice',
              ref: 'application_workhours',
              properties: {},
              choices: [
                {id: 'HBVTHxthl9U5', label: 'Full-time (37.5h weekly)'},
                {id: 'rPCuu2HSyZtw', label: 'Part-time (15-20h weekly)'},
                {id: 'Xe4n6kZwDZmy', label: 'Part-time or Full-time'},
                {id: 'oxzKDbekZsJX', label: 'Internship'},
              ],
            },
            {
              id: 'mSWabOnBNxO4',
              title: 'From what day are you *available* to start?',
              type: 'date',
              ref: 'application_start_date',
              properties: {},
            },
            {
              id: 'Et0Arf4DNGjA',
              title: 'Wine knowledge you got it?',
              type: 'long_text',
              ref: 'application_wine_knowledge',
              properties: {},
            },
            {
              id: 'Mf1gKBOlM0cH',
              title:
                'Do you have a Danish *work visa* and if so how many hours can you work per week?',
              type: 'multiple_choice',
              ref: 'application_visa_type',
              properties: {},
              choices: [
                {id: 'dYitAQM4E2Jv', label: 'EU/DK Citizen - Unlimited'},
                {
                  id: 'SyOJeOOxppPP',
                  label: 'Unrestricted Full Visa - 37.5 Hours',
                },
                {id: 'ja76ahHwIm7K', label: 'Work Holiday Visa - 37.5'},
                {id: 'HIsNuTjwgJUf', label: 'Restricted Visa 15 Hours'},
                {id: 'xpFIgnFmkeu8', label: 'No Visa'},
              ],
            },
            {
              id: 'rLsKTwtA17su',
              title:
                'What are the names of the last 3 *places that you worked at*? What was your *role*? How *long* were you at each? ',
              type: 'long_text',
              ref: 'application_work_experience',
              properties: {},
            },
            {
              id: 'GLYs8Gp0JO2v',
              title:
                'Which *languages* do you speak well enough to chat with guests?',
              type: 'multiple_choice',
              allow_multiple_selections: true,
              allow_other_choice: true,
              ref: 'application_spoken_languages',
              properties: {},
              choices: [
                {id: 'eMdsM7y9NP0z', label: 'English'},
                {id: 'HqBAsaLdyIuF', label: 'Danish'},
                {id: 'JuCjOZSTVlZM', label: 'Spanish'},
                {id: 'U19AUb4VAugp', label: 'Italian'},
              ],
            },
            {
              id: 'BwWBgiPM9z6g',
              title: 'Before we forget, please upload your *CV* here. ',
              type: 'file_upload',
              ref: 'application_cv',
              properties: {},
            },
            {
              id: 'epOKy5MsQpZm',
              title:
                "Also please leave us a *picture* to make it easier for us to recognize you if you're coming for an interview. Thanks!",
              type: 'file_upload',
              ref: 'application_profile_picture',
              properties: {},
            },
            {
              id: 'IBKDi1uxPQO3',
              title:
                "Looking great, what's your *phone number* so we can reach you?",
              type: 'phone_number',
              ref: 'application_phone_number',
              properties: {},
            },
            {
              id: 'ugDOlIVxJqQy',
              title:
                'Was a pleasure {{field:application_firstname}}! What is your *mail* so we can reach you?',
              type: 'email',
              ref: 'application_email',
              properties: {},
            },
            {
              id: 'Ieoc0nURdQTB',
              title:
                "By the way, if we don't have an open position now, would you like us to share your application with restaurants similar to *RESTAURANT NAME* so they can contact you for open positions?",
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
              properties: {},
              choices: [
                {id: 'm3OaL0R34AWY', label: 'Yes, please.'},
                {id: 'hEk8ITHSCvnP', label: 'No.'},
              ],
            },
          ],
        },
        answers: [
          {
            type: 'text',
            text: 'Dusty',
            field: {
              id: 'cY1AKL0dwxhI',
              type: 'short_text',
              ref: 'application_firstname',
            },
          },
          {
            type: 'text',
            text: 'Rolfson',
            field: {
              id: 'F4ojF19MV52r',
              type: 'short_text',
              ref: 'application_lastname',
            },
          },
          {
            type: 'text',
            text:
              'I am very motivated because of deliver bleeding-edge experiences and also I like innovate dynamic blockchains',
            field: {
              id: 'u7Wp1UIrMprx',
              type: 'short_text',
              ref: 'application_motivation',
            },
          },
          {
            type: 'text',
            text:
              'I have been working with well-modulated apps in a Front-line company and what I what really liked was leverage extensible convergence',
            field: {
              id: 'wiK6DzdkRegG',
              type: 'short_text',
              ref: 'application_self_intro',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Bakery'},
            field: {
              id: 'bEWX6jrwYbC3',
              type: 'multiple_choice',
              ref: 'application_position',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Restaurant Manager'},
            field: {
              id: 'qGS1qAaGFKAu',
              type: 'multiple_choice',
              ref: 'application_position_foh',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Part-time or Full-time'},
            field: {
              id: 'l7rd6GLUASnd',
              type: 'multiple_choice',
              ref: 'application_workhours',
            },
          },
          {
            type: 'date',
            date: '2020-11-14',
            field: {
              id: 'mSWabOnBNxO4',
              type: 'date',
              ref: 'application_start_date',
            },
          },
          {
            type: 'text',
            text: 'Barolos',
            field: {
              id: 'Et0Arf4DNGjA',
              type: 'long_text',
              ref: 'application_wine_knowledge',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Work Holiday Visa - 37.5'},
            field: {
              id: 'Mf1gKBOlM0cH',
              type: 'multiple_choice',
              ref: 'application_visa_type',
            },
          },
          {
            type: 'text',
            text:
              '\nRegional Marketing Representative as Specialist at Senger LLC for 2 years /\nDistrict Research Producer as Associate at Steuber, Lang and Gleichner for 2 years / \nNational Configuration Associate as Executive at Lindgren Group for 4 years',
            field: {
              id: 'rLsKTwtA17su',
              type: 'long_text',
              ref: 'application_work_experience',
            },
          },
          {
            type: 'choices',
            choices: {labels: ['Spanish']},
            field: {
              id: 'GLYs8Gp0JO2v',
              type: 'multiple_choice',
              ref: 'application_spoken_languages',
            },
          },
          {
            type: 'file_url',
            file_url: 'https://interface_keyboard.jpe',
            field: {
              id: 'BwWBgiPM9z6g',
              type: 'file_upload',
              ref: 'application_cv',
            },
          },
          {
            type: 'file_url',
            file_url: 'http://placeimg.com/640/480/people',
            field: {
              id: 'epOKy5MsQpZm',
              type: 'file_upload',
              ref: 'application_profile_picture',
            },
          },
          {
            type: 'phone_number',
            phone_number: '+4593785492',
            field: {
              id: 'IBKDi1uxPQO3',
              type: 'phone_number',
              ref: 'application_phone_number',
            },
          },
          {
            type: 'email',
            email: 'Darron_Schroeder@hotmail.com',
            field: {
              id: 'ugDOlIVxJqQy',
              type: 'email',
              ref: 'application_email',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Yes, please.'},
            field: {
              id: 'Ieoc0nURdQTB',
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
            },
          },
        ],
      },
    },
    {
      id: '93abab39-83b4-4994-8abf-746e8ed7a285',
      event_id: 'b2527ae4-ba04-42ff-96fd-cb573f3ca6e3',
      event_type: 'form_response',
      restaurant: {
        id: '8df2d9c6-4f04-47fa-a95f-d878d06560b4',
        label: 'Slurp',
      },
      form_response: {
        form_id: 'OXor8w',
        token: '3fe3f87b-0809-448a-90f7-81b7d465d566',
        landed_at: '2020-10-15T20:53:43.691Z',
        submitted_at: '2020-10-15T20:58:43.691Z',
        definition: {
          id: 'OXor8w',
          title: 'Application Form - anna staging',
          fields: [
            {
              id: 'cY1AKL0dwxhI',
              title: "Let's break the ice, what's your *first name*?",
              type: 'short_text',
              ref: 'application_firstname',
              properties: {},
            },
            {
              id: 'F4ojF19MV52r',
              title:
                'Hey {{field:application_firstname}}, how about your *last name*?',
              type: 'short_text',
              ref: 'application_lastname',
              properties: {},
            },
            {
              id: 'u7Wp1UIrMprx',
              title:
                'Most important question, *why* would you like to join the team?',
              type: 'short_text',
              ref: 'application_motivation',
              properties: {},
            },
            {
              id: 'wiK6DzdkRegG',
              title:
                'Sounds great! Can you introduce yourself in one sentence?',
              type: 'short_text',
              ref: 'application_self_intro',
              properties: {},
            },
            {
              id: 'bEWX6jrwYbC3',
              title: 'Well, well, well. *Where* would you like to work?',
              type: 'multiple_choice',
              ref: 'application_position',
              properties: {},
              choices: [
                {id: 'viLK4wlv8JSS', label: 'Kitchen'},
                {id: 'DrqrS4Ya4QJV', label: 'Front of House'},
                {id: 'gO4Y8JZon1Xv', label: 'Bakery'},
                {
                  id: 'Yzsww0opEN4I',
                  label: 'U18 team member (select if between 16-18 years old)',
                },
                {id: 'YqGuXu1T3imi', label: 'Administrative'},
                {id: 'Vi0FnDY5gQd9', label: 'Internship - Kitchen'},
                {id: 'qJQQ8gzbpjBn', label: 'Internship - Front of House'},
                {id: 'XG0WKt4aNDwg', label: 'Crew Member'},
              ],
            },
            {
              id: 'qGS1qAaGFKAu',
              title:
                'Which position in the *front of house* are you applying for?',
              type: 'multiple_choice',
              ref: 'application_position_foh',
              properties: {},
              choices: [
                {id: 'GZqTFt9LFJtw', label: 'Server'},
                {id: 'zTvboj6Imn3C', label: 'Restaurant Manager'},
              ],
            },
            {
              id: 'l7rd6GLUASnd',
              title: 'Do you want to work *full- or part-time*?',
              type: 'multiple_choice',
              ref: 'application_workhours',
              properties: {},
              choices: [
                {id: 'HBVTHxthl9U5', label: 'Full-time (37.5h weekly)'},
                {id: 'rPCuu2HSyZtw', label: 'Part-time (15-20h weekly)'},
                {id: 'Xe4n6kZwDZmy', label: 'Part-time or Full-time'},
                {id: 'oxzKDbekZsJX', label: 'Internship'},
              ],
            },
            {
              id: 'mSWabOnBNxO4',
              title: 'From what day are you *available* to start?',
              type: 'date',
              ref: 'application_start_date',
              properties: {},
            },
            {
              id: 'Et0Arf4DNGjA',
              title: 'Wine knowledge you got it?',
              type: 'long_text',
              ref: 'application_wine_knowledge',
              properties: {},
            },
            {
              id: 'Mf1gKBOlM0cH',
              title:
                'Do you have a Danish *work visa* and if so how many hours can you work per week?',
              type: 'multiple_choice',
              ref: 'application_visa_type',
              properties: {},
              choices: [
                {id: 'dYitAQM4E2Jv', label: 'EU/DK Citizen - Unlimited'},
                {
                  id: 'SyOJeOOxppPP',
                  label: 'Unrestricted Full Visa - 37.5 Hours',
                },
                {id: 'ja76ahHwIm7K', label: 'Work Holiday Visa - 37.5'},
                {id: 'HIsNuTjwgJUf', label: 'Restricted Visa 15 Hours'},
                {id: 'xpFIgnFmkeu8', label: 'No Visa'},
              ],
            },
            {
              id: 'rLsKTwtA17su',
              title:
                'What are the names of the last 3 *places that you worked at*? What was your *role*? How *long* were you at each? ',
              type: 'long_text',
              ref: 'application_work_experience',
              properties: {},
            },
            {
              id: 'GLYs8Gp0JO2v',
              title:
                'Which *languages* do you speak well enough to chat with guests?',
              type: 'multiple_choice',
              allow_multiple_selections: true,
              allow_other_choice: true,
              ref: 'application_spoken_languages',
              properties: {},
              choices: [
                {id: 'eMdsM7y9NP0z', label: 'English'},
                {id: 'HqBAsaLdyIuF', label: 'Danish'},
                {id: 'JuCjOZSTVlZM', label: 'Spanish'},
                {id: 'U19AUb4VAugp', label: 'Italian'},
              ],
            },
            {
              id: 'BwWBgiPM9z6g',
              title: 'Before we forget, please upload your *CV* here. ',
              type: 'file_upload',
              ref: 'application_cv',
              properties: {},
            },
            {
              id: 'epOKy5MsQpZm',
              title:
                "Also please leave us a *picture* to make it easier for us to recognize you if you're coming for an interview. Thanks!",
              type: 'file_upload',
              ref: 'application_profile_picture',
              properties: {},
            },
            {
              id: 'IBKDi1uxPQO3',
              title:
                "Looking great, what's your *phone number* so we can reach you?",
              type: 'phone_number',
              ref: 'application_phone_number',
              properties: {},
            },
            {
              id: 'ugDOlIVxJqQy',
              title:
                'Was a pleasure {{field:application_firstname}}! What is your *mail* so we can reach you?',
              type: 'email',
              ref: 'application_email',
              properties: {},
            },
            {
              id: 'Ieoc0nURdQTB',
              title:
                "By the way, if we don't have an open position now, would you like us to share your application with restaurants similar to *RESTAURANT NAME* so they can contact you for open positions?",
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
              properties: {},
              choices: [
                {id: 'm3OaL0R34AWY', label: 'Yes, please.'},
                {id: 'hEk8ITHSCvnP', label: 'No.'},
              ],
            },
          ],
        },
        answers: [
          {
            type: 'text',
            text: 'Ari',
            field: {
              id: 'cY1AKL0dwxhI',
              type: 'short_text',
              ref: 'application_firstname',
            },
          },
          {
            type: 'text',
            text: 'McCullough',
            field: {
              id: 'F4ojF19MV52r',
              type: 'short_text',
              ref: 'application_lastname',
            },
          },
          {
            type: 'text',
            text:
              'I am very motivated because of incubate ubiquitous users and also I like grow interactive relationships',
            field: {
              id: 'u7Wp1UIrMprx',
              type: 'short_text',
              ref: 'application_motivation',
            },
          },
          {
            type: 'text',
            text:
              'I have been working with heuristic apps in a Adaptive company and what I what really liked was enhance global architectures',
            field: {
              id: 'wiK6DzdkRegG',
              type: 'short_text',
              ref: 'application_self_intro',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Administrative'},
            field: {
              id: 'bEWX6jrwYbC3',
              type: 'multiple_choice',
              ref: 'application_position',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Server'},
            field: {
              id: 'qGS1qAaGFKAu',
              type: 'multiple_choice',
              ref: 'application_position_foh',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Part-time (15-20h weekly)'},
            field: {
              id: 'l7rd6GLUASnd',
              type: 'multiple_choice',
              ref: 'application_workhours',
            },
          },
          {
            type: 'date',
            date: '2020-11-14',
            field: {
              id: 'mSWabOnBNxO4',
              type: 'date',
              ref: 'application_start_date',
            },
          },
          {
            type: 'text',
            text: 'Barolos',
            field: {
              id: 'Et0Arf4DNGjA',
              type: 'long_text',
              ref: 'application_wine_knowledge',
            },
          },
          {
            type: 'choice',
            choice: {label: 'No Visa'},
            field: {
              id: 'Mf1gKBOlM0cH',
              type: 'multiple_choice',
              ref: 'application_visa_type',
            },
          },
          {
            type: 'text',
            text:
              "\nCustomer Accountability Liaison as Representative at Russel, Lubowitz and Lueilwitz for 1 years /\nNational Brand Developer as Executive at King LLC for 1 years / \nHuman Factors Engineer as Agent at O'Keefe, Frami and Monahan for 5 years",
            field: {
              id: 'rLsKTwtA17su',
              type: 'long_text',
              ref: 'application_work_experience',
            },
          },
          {
            type: 'choices',
            choices: {labels: ['Italian']},
            field: {
              id: 'GLYs8Gp0JO2v',
              type: 'multiple_choice',
              ref: 'application_spoken_languages',
            },
          },
          {
            type: 'file_url',
            file_url: 'https://optical.mpga',
            field: {
              id: 'BwWBgiPM9z6g',
              type: 'file_upload',
              ref: 'application_cv',
            },
          },
          {
            type: 'file_url',
            file_url: 'http://placeimg.com/640/480/people',
            field: {
              id: 'epOKy5MsQpZm',
              type: 'file_upload',
              ref: 'application_profile_picture',
            },
          },
          {
            type: 'phone_number',
            phone_number: '+4560476078',
            field: {
              id: 'IBKDi1uxPQO3',
              type: 'phone_number',
              ref: 'application_phone_number',
            },
          },
          {
            type: 'email',
            email: 'Taurean.Harvey@gmail.com',
            field: {
              id: 'ugDOlIVxJqQy',
              type: 'email',
              ref: 'application_email',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Yes, please.'},
            field: {
              id: 'Ieoc0nURdQTB',
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
            },
          },
        ],
      },
    },
    {
      id: 'e14115fa-c220-4dee-b5ff-6ffc0641d67e',
      event_id: '334c65f3-5ddb-4fb6-890e-9521322246de',
      event_type: 'form_response',
      restaurant: {
        id: '0eb56568-d223-47e6-91c7-62fbbeb754ec',
        label: 'McDonalds',
      },
      form_response: {
        form_id: 'OXor8w',
        token: 'e9fa4e05-efe3-4bf6-ae03-8fd4fa4077d2',
        landed_at: '2020-10-15T20:54:25.639Z',
        submitted_at: '2020-10-15T20:59:25.639Z',
        definition: {
          id: 'OXor8w',
          title: 'Application Form - anna staging',
          fields: [
            {
              id: 'cY1AKL0dwxhI',
              title: "Let's break the ice, what's your *first name*?",
              type: 'short_text',
              ref: 'application_firstname',
              properties: {},
            },
            {
              id: 'F4ojF19MV52r',
              title:
                'Hey {{field:application_firstname}}, how about your *last name*?',
              type: 'short_text',
              ref: 'application_lastname',
              properties: {},
            },
            {
              id: 'u7Wp1UIrMprx',
              title:
                'Most important question, *why* would you like to join the team?',
              type: 'short_text',
              ref: 'application_motivation',
              properties: {},
            },
            {
              id: 'wiK6DzdkRegG',
              title:
                'Sounds great! Can you introduce yourself in one sentence?',
              type: 'short_text',
              ref: 'application_self_intro',
              properties: {},
            },
            {
              id: 'bEWX6jrwYbC3',
              title: 'Well, well, well. *Where* would you like to work?',
              type: 'multiple_choice',
              ref: 'application_position',
              properties: {},
              choices: [
                {id: 'viLK4wlv8JSS', label: 'Kitchen'},
                {id: 'DrqrS4Ya4QJV', label: 'Front of House'},
                {id: 'gO4Y8JZon1Xv', label: 'Bakery'},
                {
                  id: 'Yzsww0opEN4I',
                  label: 'U18 team member (select if between 16-18 years old)',
                },
                {id: 'YqGuXu1T3imi', label: 'Administrative'},
                {id: 'Vi0FnDY5gQd9', label: 'Internship - Kitchen'},
                {id: 'qJQQ8gzbpjBn', label: 'Internship - Front of House'},
                {id: 'XG0WKt4aNDwg', label: 'Crew Member'},
              ],
            },
            {
              id: 'qGS1qAaGFKAu',
              title:
                'Which position in the *front of house* are you applying for?',
              type: 'multiple_choice',
              ref: 'application_position_foh',
              properties: {},
              choices: [
                {id: 'GZqTFt9LFJtw', label: 'Server'},
                {id: 'zTvboj6Imn3C', label: 'Restaurant Manager'},
              ],
            },
            {
              id: 'l7rd6GLUASnd',
              title: 'Do you want to work *full- or part-time*?',
              type: 'multiple_choice',
              ref: 'application_workhours',
              properties: {},
              choices: [
                {id: 'HBVTHxthl9U5', label: 'Full-time (37.5h weekly)'},
                {id: 'rPCuu2HSyZtw', label: 'Part-time (15-20h weekly)'},
                {id: 'Xe4n6kZwDZmy', label: 'Part-time or Full-time'},
                {id: 'oxzKDbekZsJX', label: 'Internship'},
              ],
            },
            {
              id: 'mSWabOnBNxO4',
              title: 'From what day are you *available* to start?',
              type: 'date',
              ref: 'application_start_date',
              properties: {},
            },
            {
              id: 'Et0Arf4DNGjA',
              title: 'Wine knowledge you got it?',
              type: 'long_text',
              ref: 'application_wine_knowledge',
              properties: {},
            },
            {
              id: 'Mf1gKBOlM0cH',
              title:
                'Do you have a Danish *work visa* and if so how many hours can you work per week?',
              type: 'multiple_choice',
              ref: 'application_visa_type',
              properties: {},
              choices: [
                {id: 'dYitAQM4E2Jv', label: 'EU/DK Citizen - Unlimited'},
                {
                  id: 'SyOJeOOxppPP',
                  label: 'Unrestricted Full Visa - 37.5 Hours',
                },
                {id: 'ja76ahHwIm7K', label: 'Work Holiday Visa - 37.5'},
                {id: 'HIsNuTjwgJUf', label: 'Restricted Visa 15 Hours'},
                {id: 'xpFIgnFmkeu8', label: 'No Visa'},
              ],
            },
            {
              id: 'rLsKTwtA17su',
              title:
                'What are the names of the last 3 *places that you worked at*? What was your *role*? How *long* were you at each? ',
              type: 'long_text',
              ref: 'application_work_experience',
              properties: {},
            },
            {
              id: 'GLYs8Gp0JO2v',
              title:
                'Which *languages* do you speak well enough to chat with guests?',
              type: 'multiple_choice',
              allow_multiple_selections: true,
              allow_other_choice: true,
              ref: 'application_spoken_languages',
              properties: {},
              choices: [
                {id: 'eMdsM7y9NP0z', label: 'English'},
                {id: 'HqBAsaLdyIuF', label: 'Danish'},
                {id: 'JuCjOZSTVlZM', label: 'Spanish'},
                {id: 'U19AUb4VAugp', label: 'Italian'},
              ],
            },
            {
              id: 'BwWBgiPM9z6g',
              title: 'Before we forget, please upload your *CV* here. ',
              type: 'file_upload',
              ref: 'application_cv',
              properties: {},
            },
            {
              id: 'epOKy5MsQpZm',
              title:
                "Also please leave us a *picture* to make it easier for us to recognize you if you're coming for an interview. Thanks!",
              type: 'file_upload',
              ref: 'application_profile_picture',
              properties: {},
            },
            {
              id: 'IBKDi1uxPQO3',
              title:
                "Looking great, what's your *phone number* so we can reach you?",
              type: 'phone_number',
              ref: 'application_phone_number',
              properties: {},
            },
            {
              id: 'ugDOlIVxJqQy',
              title:
                'Was a pleasure {{field:application_firstname}}! What is your *mail* so we can reach you?',
              type: 'email',
              ref: 'application_email',
              properties: {},
            },
            {
              id: 'Ieoc0nURdQTB',
              title:
                "By the way, if we don't have an open position now, would you like us to share your application with restaurants similar to *RESTAURANT NAME* so they can contact you for open positions?",
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
              properties: {},
              choices: [
                {id: 'm3OaL0R34AWY', label: 'Yes, please.'},
                {id: 'hEk8ITHSCvnP', label: 'No.'},
              ],
            },
          ],
        },
        answers: [
          {
            type: 'text',
            text: 'Ethel',
            field: {
              id: 'cY1AKL0dwxhI',
              type: 'short_text',
              ref: 'application_firstname',
            },
          },
          {
            type: 'text',
            text: 'Koch',
            field: {
              id: 'F4ojF19MV52r',
              type: 'short_text',
              ref: 'application_lastname',
            },
          },
          {
            type: 'text',
            text:
              'I am very motivated because of drive vertical e-commerce and also I like grow plug-and-play partnerships',
            field: {
              id: 'u7Wp1UIrMprx',
              type: 'short_text',
              ref: 'application_motivation',
            },
          },
          {
            type: 'text',
            text:
              'I have been working with high-level apps in a Optional company and what I what really liked was implement mission-critical web services',
            field: {
              id: 'wiK6DzdkRegG',
              type: 'short_text',
              ref: 'application_self_intro',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Administrative'},
            field: {
              id: 'bEWX6jrwYbC3',
              type: 'multiple_choice',
              ref: 'application_position',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Restaurant Manager'},
            field: {
              id: 'qGS1qAaGFKAu',
              type: 'multiple_choice',
              ref: 'application_position_foh',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Part-time (15-20h weekly)'},
            field: {
              id: 'l7rd6GLUASnd',
              type: 'multiple_choice',
              ref: 'application_workhours',
            },
          },
          {
            type: 'date',
            date: '2020-11-14',
            field: {
              id: 'mSWabOnBNxO4',
              type: 'date',
              ref: 'application_start_date',
            },
          },
          {
            type: 'text',
            text: 'Barolos',
            field: {
              id: 'Et0Arf4DNGjA',
              type: 'long_text',
              ref: 'application_wine_knowledge',
            },
          },
          {
            type: 'choice',
            choice: {label: 'EU/DK Citizen - Unlimited'},
            field: {
              id: 'Mf1gKBOlM0cH',
              type: 'multiple_choice',
              ref: 'application_visa_type',
            },
          },
          {
            type: 'text',
            text:
              '\nSenior Interactions Specialist as Designer at Murphy, Schroeder and Hills for 4 years /\nInternational Directives Planner as Facilitator at Oberbrunner - Hills for 2 years / \nLegacy Implementation Director as Designer at Ritchie Inc for 2 years',
            field: {
              id: 'rLsKTwtA17su',
              type: 'long_text',
              ref: 'application_work_experience',
            },
          },
          {
            type: 'choices',
            choices: {labels: ['Italian']},
            field: {
              id: 'GLYs8Gp0JO2v',
              type: 'multiple_choice',
              ref: 'application_spoken_languages',
            },
          },
          {
            type: 'file_url',
            file_url: 'https://deposit_system.wav',
            field: {
              id: 'BwWBgiPM9z6g',
              type: 'file_upload',
              ref: 'application_cv',
            },
          },
          {
            type: 'file_url',
            file_url: 'http://placeimg.com/640/480/people',
            field: {
              id: 'epOKy5MsQpZm',
              type: 'file_upload',
              ref: 'application_profile_picture',
            },
          },
          {
            type: 'phone_number',
            phone_number: '+4535721521',
            field: {
              id: 'IBKDi1uxPQO3',
              type: 'phone_number',
              ref: 'application_phone_number',
            },
          },
          {
            type: 'email',
            email: 'Seamus89@yahoo.com',
            field: {
              id: 'ugDOlIVxJqQy',
              type: 'email',
              ref: 'application_email',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Yes, please.'},
            field: {
              id: 'Ieoc0nURdQTB',
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
            },
          },
        ],
      },
    },
    {
      id: '31f750fd-456d-4128-b1c3-cb48736bd0e5',
      event_id: '1afd46e8-34f3-4e0a-943b-703408b09f85',
      event_type: 'form_response',
      restaurant: {
        id: '2b7d5ea8-0f2b-454b-b2e2-89a7a87975a2',
        label: 'Noma',
      },
      form_response: {
        form_id: 'OXor8w',
        token: '326b9613-d065-48ae-9045-27f9400965c3',
        landed_at: '2020-10-15T20:54:48.891Z',
        submitted_at: '2020-10-15T20:59:48.891Z',
        definition: {
          id: 'OXor8w',
          title: 'Application Form - anna staging',
          fields: [
            {
              id: 'cY1AKL0dwxhI',
              title: "Let's break the ice, what's your *first name*?",
              type: 'short_text',
              ref: 'application_firstname',
              properties: {},
            },
            {
              id: 'F4ojF19MV52r',
              title:
                'Hey {{field:application_firstname}}, how about your *last name*?',
              type: 'short_text',
              ref: 'application_lastname',
              properties: {},
            },
            {
              id: 'u7Wp1UIrMprx',
              title:
                'Most important question, *why* would you like to join the team?',
              type: 'short_text',
              ref: 'application_motivation',
              properties: {},
            },
            {
              id: 'wiK6DzdkRegG',
              title:
                'Sounds great! Can you introduce yourself in one sentence?',
              type: 'short_text',
              ref: 'application_self_intro',
              properties: {},
            },
            {
              id: 'bEWX6jrwYbC3',
              title: 'Well, well, well. *Where* would you like to work?',
              type: 'multiple_choice',
              ref: 'application_position',
              properties: {},
              choices: [
                {id: 'viLK4wlv8JSS', label: 'Kitchen'},
                {id: 'DrqrS4Ya4QJV', label: 'Front of House'},
                {id: 'gO4Y8JZon1Xv', label: 'Bakery'},
                {
                  id: 'Yzsww0opEN4I',
                  label: 'U18 team member (select if between 16-18 years old)',
                },
                {id: 'YqGuXu1T3imi', label: 'Administrative'},
                {id: 'Vi0FnDY5gQd9', label: 'Internship - Kitchen'},
                {id: 'qJQQ8gzbpjBn', label: 'Internship - Front of House'},
                {id: 'XG0WKt4aNDwg', label: 'Crew Member'},
              ],
            },
            {
              id: 'qGS1qAaGFKAu',
              title:
                'Which position in the *front of house* are you applying for?',
              type: 'multiple_choice',
              ref: 'application_position_foh',
              properties: {},
              choices: [
                {id: 'GZqTFt9LFJtw', label: 'Server'},
                {id: 'zTvboj6Imn3C', label: 'Restaurant Manager'},
              ],
            },
            {
              id: 'l7rd6GLUASnd',
              title: 'Do you want to work *full- or part-time*?',
              type: 'multiple_choice',
              ref: 'application_workhours',
              properties: {},
              choices: [
                {id: 'HBVTHxthl9U5', label: 'Full-time (37.5h weekly)'},
                {id: 'rPCuu2HSyZtw', label: 'Part-time (15-20h weekly)'},
                {id: 'Xe4n6kZwDZmy', label: 'Part-time or Full-time'},
                {id: 'oxzKDbekZsJX', label: 'Internship'},
              ],
            },
            {
              id: 'mSWabOnBNxO4',
              title: 'From what day are you *available* to start?',
              type: 'date',
              ref: 'application_start_date',
              properties: {},
            },
            {
              id: 'Et0Arf4DNGjA',
              title: 'Wine knowledge you got it?',
              type: 'long_text',
              ref: 'application_wine_knowledge',
              properties: {},
            },
            {
              id: 'Mf1gKBOlM0cH',
              title:
                'Do you have a Danish *work visa* and if so how many hours can you work per week?',
              type: 'multiple_choice',
              ref: 'application_visa_type',
              properties: {},
              choices: [
                {id: 'dYitAQM4E2Jv', label: 'EU/DK Citizen - Unlimited'},
                {
                  id: 'SyOJeOOxppPP',
                  label: 'Unrestricted Full Visa - 37.5 Hours',
                },
                {id: 'ja76ahHwIm7K', label: 'Work Holiday Visa - 37.5'},
                {id: 'HIsNuTjwgJUf', label: 'Restricted Visa 15 Hours'},
                {id: 'xpFIgnFmkeu8', label: 'No Visa'},
              ],
            },
            {
              id: 'rLsKTwtA17su',
              title:
                'What are the names of the last 3 *places that you worked at*? What was your *role*? How *long* were you at each? ',
              type: 'long_text',
              ref: 'application_work_experience',
              properties: {},
            },
            {
              id: 'GLYs8Gp0JO2v',
              title:
                'Which *languages* do you speak well enough to chat with guests?',
              type: 'multiple_choice',
              allow_multiple_selections: true,
              allow_other_choice: true,
              ref: 'application_spoken_languages',
              properties: {},
              choices: [
                {id: 'eMdsM7y9NP0z', label: 'English'},
                {id: 'HqBAsaLdyIuF', label: 'Danish'},
                {id: 'JuCjOZSTVlZM', label: 'Spanish'},
                {id: 'U19AUb4VAugp', label: 'Italian'},
              ],
            },
            {
              id: 'BwWBgiPM9z6g',
              title: 'Before we forget, please upload your *CV* here. ',
              type: 'file_upload',
              ref: 'application_cv',
              properties: {},
            },
            {
              id: 'epOKy5MsQpZm',
              title:
                "Also please leave us a *picture* to make it easier for us to recognize you if you're coming for an interview. Thanks!",
              type: 'file_upload',
              ref: 'application_profile_picture',
              properties: {},
            },
            {
              id: 'IBKDi1uxPQO3',
              title:
                "Looking great, what's your *phone number* so we can reach you?",
              type: 'phone_number',
              ref: 'application_phone_number',
              properties: {},
            },
            {
              id: 'ugDOlIVxJqQy',
              title:
                'Was a pleasure {{field:application_firstname}}! What is your *mail* so we can reach you?',
              type: 'email',
              ref: 'application_email',
              properties: {},
            },
            {
              id: 'Ieoc0nURdQTB',
              title:
                "By the way, if we don't have an open position now, would you like us to share your application with restaurants similar to *RESTAURANT NAME* so they can contact you for open positions?",
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
              properties: {},
              choices: [
                {id: 'm3OaL0R34AWY', label: 'Yes, please.'},
                {id: 'hEk8ITHSCvnP', label: 'No.'},
              ],
            },
          ],
        },
        answers: [
          {
            type: 'text',
            text: 'Braden',
            field: {
              id: 'cY1AKL0dwxhI',
              type: 'short_text',
              ref: 'application_firstname',
            },
          },
          {
            type: 'text',
            text: 'Jakubowski',
            field: {
              id: 'F4ojF19MV52r',
              type: 'short_text',
              ref: 'application_lastname',
            },
          },
          {
            type: 'text',
            text:
              'I am very motivated because of enable bleeding-edge content and also I like facilitate proactive schemas',
            field: {
              id: 'u7Wp1UIrMprx',
              type: 'short_text',
              ref: 'application_motivation',
            },
          },
          {
            type: 'text',
            text:
              'I have been working with explicit apps in a Open-source company and what I what really liked was drive open-source portals',
            field: {
              id: 'wiK6DzdkRegG',
              type: 'short_text',
              ref: 'application_self_intro',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Front of House'},
            field: {
              id: 'bEWX6jrwYbC3',
              type: 'multiple_choice',
              ref: 'application_position',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Server'},
            field: {
              id: 'qGS1qAaGFKAu',
              type: 'multiple_choice',
              ref: 'application_position_foh',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Full-time (37.5h weekly)'},
            field: {
              id: 'l7rd6GLUASnd',
              type: 'multiple_choice',
              ref: 'application_workhours',
            },
          },
          {
            type: 'date',
            date: '2020-11-14',
            field: {
              id: 'mSWabOnBNxO4',
              type: 'date',
              ref: 'application_start_date',
            },
          },
          {
            type: 'text',
            text: 'Barolos',
            field: {
              id: 'Et0Arf4DNGjA',
              type: 'long_text',
              ref: 'application_wine_knowledge',
            },
          },
          {
            type: 'choice',
            choice: {label: 'EU/DK Citizen - Unlimited'},
            field: {
              id: 'Mf1gKBOlM0cH',
              type: 'multiple_choice',
              ref: 'application_visa_type',
            },
          },
          {
            type: 'text',
            text:
              '\nRegional Brand Producer as Associate at Windler - Fisher for 4 years /\nLead Solutions Facilitator as Representative at Gulgowski - Tremblay for 3 years / \nCentral Tactics Specialist as Director at Wolff - Sipes for 4 years',
            field: {
              id: 'rLsKTwtA17su',
              type: 'long_text',
              ref: 'application_work_experience',
            },
          },
          {
            type: 'choices',
            choices: {labels: ['English']},
            field: {
              id: 'GLYs8Gp0JO2v',
              type: 'multiple_choice',
              ref: 'application_spoken_languages',
            },
          },
          {
            type: 'file_url',
            file_url: 'https://maine.mp4v',
            field: {
              id: 'BwWBgiPM9z6g',
              type: 'file_upload',
              ref: 'application_cv',
            },
          },
          {
            type: 'file_url',
            file_url: 'http://placeimg.com/640/480/people',
            field: {
              id: 'epOKy5MsQpZm',
              type: 'file_upload',
              ref: 'application_profile_picture',
            },
          },
          {
            type: 'phone_number',
            phone_number: '+4551161770',
            field: {
              id: 'IBKDi1uxPQO3',
              type: 'phone_number',
              ref: 'application_phone_number',
            },
          },
          {
            type: 'email',
            email: 'Pansy73@yahoo.com',
            field: {
              id: 'ugDOlIVxJqQy',
              type: 'email',
              ref: 'application_email',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Yes, please.'},
            field: {
              id: 'Ieoc0nURdQTB',
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
            },
          },
        ],
      },
    },
    {
      id: '96fc668d-f574-4921-a4f5-8ac40d803d56',
      event_id: '4bbeff2d-47cd-4966-b43d-a7a35982c9cc',
      event_type: 'form_response',
      restaurant: {
        id: '2b7d5ea8-0f2b-454b-b2e2-89a7a87975a2',
        label: 'Noma',
      },
      form_response: {
        form_id: 'OXor8w',
        token: '282cc807-a039-48d0-b7f0-83e5f6d9acf3',
        landed_at: '2020-10-15T20:55:05.093Z',
        submitted_at: '2020-10-15T21:00:05.093Z',
        definition: {
          id: 'OXor8w',
          title: 'Application Form - anna staging',
          fields: [
            {
              id: 'cY1AKL0dwxhI',
              title: "Let's break the ice, what's your *first name*?",
              type: 'short_text',
              ref: 'application_firstname',
              properties: {},
            },
            {
              id: 'F4ojF19MV52r',
              title:
                'Hey {{field:application_firstname}}, how about your *last name*?',
              type: 'short_text',
              ref: 'application_lastname',
              properties: {},
            },
            {
              id: 'u7Wp1UIrMprx',
              title:
                'Most important question, *why* would you like to join the team?',
              type: 'short_text',
              ref: 'application_motivation',
              properties: {},
            },
            {
              id: 'wiK6DzdkRegG',
              title:
                'Sounds great! Can you introduce yourself in one sentence?',
              type: 'short_text',
              ref: 'application_self_intro',
              properties: {},
            },
            {
              id: 'bEWX6jrwYbC3',
              title: 'Well, well, well. *Where* would you like to work?',
              type: 'multiple_choice',
              ref: 'application_position',
              properties: {},
              choices: [
                {id: 'viLK4wlv8JSS', label: 'Kitchen'},
                {id: 'DrqrS4Ya4QJV', label: 'Front of House'},
                {id: 'gO4Y8JZon1Xv', label: 'Bakery'},
                {
                  id: 'Yzsww0opEN4I',
                  label: 'U18 team member (select if between 16-18 years old)',
                },
                {id: 'YqGuXu1T3imi', label: 'Administrative'},
                {id: 'Vi0FnDY5gQd9', label: 'Internship - Kitchen'},
                {id: 'qJQQ8gzbpjBn', label: 'Internship - Front of House'},
                {id: 'XG0WKt4aNDwg', label: 'Crew Member'},
              ],
            },
            {
              id: 'qGS1qAaGFKAu',
              title:
                'Which position in the *front of house* are you applying for?',
              type: 'multiple_choice',
              ref: 'application_position_foh',
              properties: {},
              choices: [
                {id: 'GZqTFt9LFJtw', label: 'Server'},
                {id: 'zTvboj6Imn3C', label: 'Restaurant Manager'},
              ],
            },
            {
              id: 'l7rd6GLUASnd',
              title: 'Do you want to work *full- or part-time*?',
              type: 'multiple_choice',
              ref: 'application_workhours',
              properties: {},
              choices: [
                {id: 'HBVTHxthl9U5', label: 'Full-time (37.5h weekly)'},
                {id: 'rPCuu2HSyZtw', label: 'Part-time (15-20h weekly)'},
                {id: 'Xe4n6kZwDZmy', label: 'Part-time or Full-time'},
                {id: 'oxzKDbekZsJX', label: 'Internship'},
              ],
            },
            {
              id: 'mSWabOnBNxO4',
              title: 'From what day are you *available* to start?',
              type: 'date',
              ref: 'application_start_date',
              properties: {},
            },
            {
              id: 'Et0Arf4DNGjA',
              title: 'Wine knowledge you got it?',
              type: 'long_text',
              ref: 'application_wine_knowledge',
              properties: {},
            },
            {
              id: 'Mf1gKBOlM0cH',
              title:
                'Do you have a Danish *work visa* and if so how many hours can you work per week?',
              type: 'multiple_choice',
              ref: 'application_visa_type',
              properties: {},
              choices: [
                {id: 'dYitAQM4E2Jv', label: 'EU/DK Citizen - Unlimited'},
                {
                  id: 'SyOJeOOxppPP',
                  label: 'Unrestricted Full Visa - 37.5 Hours',
                },
                {id: 'ja76ahHwIm7K', label: 'Work Holiday Visa - 37.5'},
                {id: 'HIsNuTjwgJUf', label: 'Restricted Visa 15 Hours'},
                {id: 'xpFIgnFmkeu8', label: 'No Visa'},
              ],
            },
            {
              id: 'rLsKTwtA17su',
              title:
                'What are the names of the last 3 *places that you worked at*? What was your *role*? How *long* were you at each? ',
              type: 'long_text',
              ref: 'application_work_experience',
              properties: {},
            },
            {
              id: 'GLYs8Gp0JO2v',
              title:
                'Which *languages* do you speak well enough to chat with guests?',
              type: 'multiple_choice',
              allow_multiple_selections: true,
              allow_other_choice: true,
              ref: 'application_spoken_languages',
              properties: {},
              choices: [
                {id: 'eMdsM7y9NP0z', label: 'English'},
                {id: 'HqBAsaLdyIuF', label: 'Danish'},
                {id: 'JuCjOZSTVlZM', label: 'Spanish'},
                {id: 'U19AUb4VAugp', label: 'Italian'},
              ],
            },
            {
              id: 'BwWBgiPM9z6g',
              title: 'Before we forget, please upload your *CV* here. ',
              type: 'file_upload',
              ref: 'application_cv',
              properties: {},
            },
            {
              id: 'epOKy5MsQpZm',
              title:
                "Also please leave us a *picture* to make it easier for us to recognize you if you're coming for an interview. Thanks!",
              type: 'file_upload',
              ref: 'application_profile_picture',
              properties: {},
            },
            {
              id: 'IBKDi1uxPQO3',
              title:
                "Looking great, what's your *phone number* so we can reach you?",
              type: 'phone_number',
              ref: 'application_phone_number',
              properties: {},
            },
            {
              id: 'ugDOlIVxJqQy',
              title:
                'Was a pleasure {{field:application_firstname}}! What is your *mail* so we can reach you?',
              type: 'email',
              ref: 'application_email',
              properties: {},
            },
            {
              id: 'Ieoc0nURdQTB',
              title:
                "By the way, if we don't have an open position now, would you like us to share your application with restaurants similar to *RESTAURANT NAME* so they can contact you for open positions?",
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
              properties: {},
              choices: [
                {id: 'm3OaL0R34AWY', label: 'Yes, please.'},
                {id: 'hEk8ITHSCvnP', label: 'No.'},
              ],
            },
          ],
        },
        answers: [
          {
            type: 'text',
            text: 'Elza',
            field: {
              id: 'cY1AKL0dwxhI',
              type: 'short_text',
              ref: 'application_firstname',
            },
          },
          {
            type: 'text',
            text: 'Marvin',
            field: {
              id: 'F4ojF19MV52r',
              type: 'short_text',
              ref: 'application_lastname',
            },
          },
          {
            type: 'text',
            text:
              'I am very motivated because of innovate rich web services and also I like leverage global blockchains',
            field: {
              id: 'u7Wp1UIrMprx',
              type: 'short_text',
              ref: 'application_motivation',
            },
          },
          {
            type: 'text',
            text:
              'I have been working with reciprocal apps in a Seamless company and what I what really liked was incubate robust eyeballs',
            field: {
              id: 'wiK6DzdkRegG',
              type: 'short_text',
              ref: 'application_self_intro',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Bakery'},
            field: {
              id: 'bEWX6jrwYbC3',
              type: 'multiple_choice',
              ref: 'application_position',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Restaurant Manager'},
            field: {
              id: 'qGS1qAaGFKAu',
              type: 'multiple_choice',
              ref: 'application_position_foh',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Full-time (37.5h weekly)'},
            field: {
              id: 'l7rd6GLUASnd',
              type: 'multiple_choice',
              ref: 'application_workhours',
            },
          },
          {
            type: 'date',
            date: '2020-11-14',
            field: {
              id: 'mSWabOnBNxO4',
              type: 'date',
              ref: 'application_start_date',
            },
          },
          {
            type: 'text',
            text: 'Barolos',
            field: {
              id: 'Et0Arf4DNGjA',
              type: 'long_text',
              ref: 'application_wine_knowledge',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Unrestricted Full Visa - 37.5 Hours'},
            field: {
              id: 'Mf1gKBOlM0cH',
              type: 'multiple_choice',
              ref: 'application_visa_type',
            },
          },
          {
            type: 'text',
            text:
              '\nCorporate Intranet Supervisor as Director at Reichert, Runte and Flatley for 2 years /\nInternal Identity Planner as Liaison at Mraz - Kertzmann for 3 years / \nFuture Marketing Developer as Representative at Homenick - Kunze for 2 years',
            field: {
              id: 'rLsKTwtA17su',
              type: 'long_text',
              ref: 'application_work_experience',
            },
          },
          {
            type: 'choices',
            choices: {labels: ['Italian']},
            field: {
              id: 'GLYs8Gp0JO2v',
              type: 'multiple_choice',
              ref: 'application_spoken_languages',
            },
          },
          {
            type: 'file_url',
            file_url: 'https://delaware_index_bedfordshire.jpe',
            field: {
              id: 'BwWBgiPM9z6g',
              type: 'file_upload',
              ref: 'application_cv',
            },
          },
          {
            type: 'file_url',
            file_url: 'http://placeimg.com/640/480/people',
            field: {
              id: 'epOKy5MsQpZm',
              type: 'file_upload',
              ref: 'application_profile_picture',
            },
          },
          {
            type: 'phone_number',
            phone_number: '+4522382058',
            field: {
              id: 'IBKDi1uxPQO3',
              type: 'phone_number',
              ref: 'application_phone_number',
            },
          },
          {
            type: 'email',
            email: 'Leatha.Abbott@gmail.com',
            field: {
              id: 'ugDOlIVxJqQy',
              type: 'email',
              ref: 'application_email',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Yes, please.'},
            field: {
              id: 'Ieoc0nURdQTB',
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
            },
          },
        ],
      },
    },
    {
      id: '90a5915e-f356-49af-a280-6e5da05cd439',
      event_id: '602b6362-3468-4501-8e0c-a32a8e05d507',
      event_type: 'form_response',
      restaurant: {
        id: '8df2d9c6-4f04-47fa-a95f-d878d06560b4',
        label: 'Slurp',
      },
      form_response: {
        form_id: 'OXor8w',
        token: 'b7a3b413-99e4-4860-aa1e-e4179579f49e',
        landed_at: '2020-10-15T20:55:26.945Z',
        submitted_at: '2020-10-15T21:00:26.945Z',
        definition: {
          id: 'OXor8w',
          title: 'Application Form - anna staging',
          fields: [
            {
              id: 'cY1AKL0dwxhI',
              title: "Let's break the ice, what's your *first name*?",
              type: 'short_text',
              ref: 'application_firstname',
              properties: {},
            },
            {
              id: 'F4ojF19MV52r',
              title:
                'Hey {{field:application_firstname}}, how about your *last name*?',
              type: 'short_text',
              ref: 'application_lastname',
              properties: {},
            },
            {
              id: 'u7Wp1UIrMprx',
              title:
                'Most important question, *why* would you like to join the team?',
              type: 'short_text',
              ref: 'application_motivation',
              properties: {},
            },
            {
              id: 'wiK6DzdkRegG',
              title:
                'Sounds great! Can you introduce yourself in one sentence?',
              type: 'short_text',
              ref: 'application_self_intro',
              properties: {},
            },
            {
              id: 'bEWX6jrwYbC3',
              title: 'Well, well, well. *Where* would you like to work?',
              type: 'multiple_choice',
              ref: 'application_position',
              properties: {},
              choices: [
                {id: 'viLK4wlv8JSS', label: 'Kitchen'},
                {id: 'DrqrS4Ya4QJV', label: 'Front of House'},
                {id: 'gO4Y8JZon1Xv', label: 'Bakery'},
                {
                  id: 'Yzsww0opEN4I',
                  label: 'U18 team member (select if between 16-18 years old)',
                },
                {id: 'YqGuXu1T3imi', label: 'Administrative'},
                {id: 'Vi0FnDY5gQd9', label: 'Internship - Kitchen'},
                {id: 'qJQQ8gzbpjBn', label: 'Internship - Front of House'},
                {id: 'XG0WKt4aNDwg', label: 'Crew Member'},
              ],
            },
            {
              id: 'qGS1qAaGFKAu',
              title:
                'Which position in the *front of house* are you applying for?',
              type: 'multiple_choice',
              ref: 'application_position_foh',
              properties: {},
              choices: [
                {id: 'GZqTFt9LFJtw', label: 'Server'},
                {id: 'zTvboj6Imn3C', label: 'Restaurant Manager'},
              ],
            },
            {
              id: 'l7rd6GLUASnd',
              title: 'Do you want to work *full- or part-time*?',
              type: 'multiple_choice',
              ref: 'application_workhours',
              properties: {},
              choices: [
                {id: 'HBVTHxthl9U5', label: 'Full-time (37.5h weekly)'},
                {id: 'rPCuu2HSyZtw', label: 'Part-time (15-20h weekly)'},
                {id: 'Xe4n6kZwDZmy', label: 'Part-time or Full-time'},
                {id: 'oxzKDbekZsJX', label: 'Internship'},
              ],
            },
            {
              id: 'mSWabOnBNxO4',
              title: 'From what day are you *available* to start?',
              type: 'date',
              ref: 'application_start_date',
              properties: {},
            },
            {
              id: 'Et0Arf4DNGjA',
              title: 'Wine knowledge you got it?',
              type: 'long_text',
              ref: 'application_wine_knowledge',
              properties: {},
            },
            {
              id: 'Mf1gKBOlM0cH',
              title:
                'Do you have a Danish *work visa* and if so how many hours can you work per week?',
              type: 'multiple_choice',
              ref: 'application_visa_type',
              properties: {},
              choices: [
                {id: 'dYitAQM4E2Jv', label: 'EU/DK Citizen - Unlimited'},
                {
                  id: 'SyOJeOOxppPP',
                  label: 'Unrestricted Full Visa - 37.5 Hours',
                },
                {id: 'ja76ahHwIm7K', label: 'Work Holiday Visa - 37.5'},
                {id: 'HIsNuTjwgJUf', label: 'Restricted Visa 15 Hours'},
                {id: 'xpFIgnFmkeu8', label: 'No Visa'},
              ],
            },
            {
              id: 'rLsKTwtA17su',
              title:
                'What are the names of the last 3 *places that you worked at*? What was your *role*? How *long* were you at each? ',
              type: 'long_text',
              ref: 'application_work_experience',
              properties: {},
            },
            {
              id: 'GLYs8Gp0JO2v',
              title:
                'Which *languages* do you speak well enough to chat with guests?',
              type: 'multiple_choice',
              allow_multiple_selections: true,
              allow_other_choice: true,
              ref: 'application_spoken_languages',
              properties: {},
              choices: [
                {id: 'eMdsM7y9NP0z', label: 'English'},
                {id: 'HqBAsaLdyIuF', label: 'Danish'},
                {id: 'JuCjOZSTVlZM', label: 'Spanish'},
                {id: 'U19AUb4VAugp', label: 'Italian'},
              ],
            },
            {
              id: 'BwWBgiPM9z6g',
              title: 'Before we forget, please upload your *CV* here. ',
              type: 'file_upload',
              ref: 'application_cv',
              properties: {},
            },
            {
              id: 'epOKy5MsQpZm',
              title:
                "Also please leave us a *picture* to make it easier for us to recognize you if you're coming for an interview. Thanks!",
              type: 'file_upload',
              ref: 'application_profile_picture',
              properties: {},
            },
            {
              id: 'IBKDi1uxPQO3',
              title:
                "Looking great, what's your *phone number* so we can reach you?",
              type: 'phone_number',
              ref: 'application_phone_number',
              properties: {},
            },
            {
              id: 'ugDOlIVxJqQy',
              title:
                'Was a pleasure {{field:application_firstname}}! What is your *mail* so we can reach you?',
              type: 'email',
              ref: 'application_email',
              properties: {},
            },
            {
              id: 'Ieoc0nURdQTB',
              title:
                "By the way, if we don't have an open position now, would you like us to share your application with restaurants similar to *RESTAURANT NAME* so they can contact you for open positions?",
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
              properties: {},
              choices: [
                {id: 'm3OaL0R34AWY', label: 'Yes, please.'},
                {id: 'hEk8ITHSCvnP', label: 'No.'},
              ],
            },
          ],
        },
        answers: [
          {
            type: 'text',
            text: 'Tabitha',
            field: {
              id: 'cY1AKL0dwxhI',
              type: 'short_text',
              ref: 'application_firstname',
            },
          },
          {
            type: 'text',
            text: 'Hansen',
            field: {
              id: 'F4ojF19MV52r',
              type: 'short_text',
              ref: 'application_lastname',
            },
          },
          {
            type: 'text',
            text:
              'I am very motivated because of scale B2C synergies and also I like exploit enterprise convergence',
            field: {
              id: 'u7Wp1UIrMprx',
              type: 'short_text',
              ref: 'application_motivation',
            },
          },
          {
            type: 'text',
            text:
              'I have been working with 6th generation apps in a Up-sized company and what I what really liked was empower dynamic supply-chains',
            field: {
              id: 'wiK6DzdkRegG',
              type: 'short_text',
              ref: 'application_self_intro',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Bakery'},
            field: {
              id: 'bEWX6jrwYbC3',
              type: 'multiple_choice',
              ref: 'application_position',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Restaurant Manager'},
            field: {
              id: 'qGS1qAaGFKAu',
              type: 'multiple_choice',
              ref: 'application_position_foh',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Part-time (15-20h weekly)'},
            field: {
              id: 'l7rd6GLUASnd',
              type: 'multiple_choice',
              ref: 'application_workhours',
            },
          },
          {
            type: 'date',
            date: '2020-11-14',
            field: {
              id: 'mSWabOnBNxO4',
              type: 'date',
              ref: 'application_start_date',
            },
          },
          {
            type: 'text',
            text: 'Barolos',
            field: {
              id: 'Et0Arf4DNGjA',
              type: 'long_text',
              ref: 'application_wine_knowledge',
            },
          },
          {
            type: 'choice',
            choice: {label: 'No Visa'},
            field: {
              id: 'Mf1gKBOlM0cH',
              type: 'multiple_choice',
              ref: 'application_visa_type',
            },
          },
          {
            type: 'text',
            text:
              '\nLegacy Applications Engineer as Executive at Feil, Greenholt and Krajcik for 5 years /\nChief Communications Liaison as Facilitator at Hartmann - Yost for 1 years / \nForward Infrastructure Developer as Planner at Langosh Group for 3 years',
            field: {
              id: 'rLsKTwtA17su',
              type: 'long_text',
              ref: 'application_work_experience',
            },
          },
          {
            type: 'choices',
            choices: {labels: ['Danish']},
            field: {
              id: 'GLYs8Gp0JO2v',
              type: 'multiple_choice',
              ref: 'application_spoken_languages',
            },
          },
          {
            type: 'file_url',
            file_url: 'https://egyptian_communications.pdf',
            field: {
              id: 'BwWBgiPM9z6g',
              type: 'file_upload',
              ref: 'application_cv',
            },
          },
          {
            type: 'file_url',
            file_url: 'http://placeimg.com/640/480/people',
            field: {
              id: 'epOKy5MsQpZm',
              type: 'file_upload',
              ref: 'application_profile_picture',
            },
          },
          {
            type: 'phone_number',
            phone_number: '+4579951800',
            field: {
              id: 'IBKDi1uxPQO3',
              type: 'phone_number',
              ref: 'application_phone_number',
            },
          },
          {
            type: 'email',
            email: 'Jayme_Dietrich15@yahoo.com',
            field: {
              id: 'ugDOlIVxJqQy',
              type: 'email',
              ref: 'application_email',
            },
          },
          {
            type: 'choice',
            choice: {label: 'No.'},
            field: {
              id: 'Ieoc0nURdQTB',
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
            },
          },
        ],
      },
    },
    {
      id: '4bda1d9a-0ab8-40c5-aa35-cdf31b2b332e',
      event_id: 'a412d04d-38b2-4516-9c21-74c74b236c63',
      event_type: 'form_response',
      restaurant: {
        id: '0eb56568-d223-47e6-91c7-62fbbeb754ec',
        label: 'McDonalds',
      },
      form_response: {
        form_id: 'OXor8w',
        token: 'a7bfc028-d7b8-479c-9f35-28f4d121d2c3',
        landed_at: '2020-10-15T20:55:40.145Z',
        submitted_at: '2020-10-15T21:00:40.145Z',
        definition: {
          id: 'OXor8w',
          title: 'Application Form - anna staging',
          fields: [
            {
              id: 'cY1AKL0dwxhI',
              title: "Let's break the ice, what's your *first name*?",
              type: 'short_text',
              ref: 'application_firstname',
              properties: {},
            },
            {
              id: 'F4ojF19MV52r',
              title:
                'Hey {{field:application_firstname}}, how about your *last name*?',
              type: 'short_text',
              ref: 'application_lastname',
              properties: {},
            },
            {
              id: 'u7Wp1UIrMprx',
              title:
                'Most important question, *why* would you like to join the team?',
              type: 'short_text',
              ref: 'application_motivation',
              properties: {},
            },
            {
              id: 'wiK6DzdkRegG',
              title:
                'Sounds great! Can you introduce yourself in one sentence?',
              type: 'short_text',
              ref: 'application_self_intro',
              properties: {},
            },
            {
              id: 'bEWX6jrwYbC3',
              title: 'Well, well, well. *Where* would you like to work?',
              type: 'multiple_choice',
              ref: 'application_position',
              properties: {},
              choices: [
                {id: 'viLK4wlv8JSS', label: 'Kitchen'},
                {id: 'DrqrS4Ya4QJV', label: 'Front of House'},
                {id: 'gO4Y8JZon1Xv', label: 'Bakery'},
                {
                  id: 'Yzsww0opEN4I',
                  label: 'U18 team member (select if between 16-18 years old)',
                },
                {id: 'YqGuXu1T3imi', label: 'Administrative'},
                {id: 'Vi0FnDY5gQd9', label: 'Internship - Kitchen'},
                {id: 'qJQQ8gzbpjBn', label: 'Internship - Front of House'},
                {id: 'XG0WKt4aNDwg', label: 'Crew Member'},
              ],
            },
            {
              id: 'qGS1qAaGFKAu',
              title:
                'Which position in the *front of house* are you applying for?',
              type: 'multiple_choice',
              ref: 'application_position_foh',
              properties: {},
              choices: [
                {id: 'GZqTFt9LFJtw', label: 'Server'},
                {id: 'zTvboj6Imn3C', label: 'Restaurant Manager'},
              ],
            },
            {
              id: 'l7rd6GLUASnd',
              title: 'Do you want to work *full- or part-time*?',
              type: 'multiple_choice',
              ref: 'application_workhours',
              properties: {},
              choices: [
                {id: 'HBVTHxthl9U5', label: 'Full-time (37.5h weekly)'},
                {id: 'rPCuu2HSyZtw', label: 'Part-time (15-20h weekly)'},
                {id: 'Xe4n6kZwDZmy', label: 'Part-time or Full-time'},
                {id: 'oxzKDbekZsJX', label: 'Internship'},
              ],
            },
            {
              id: 'mSWabOnBNxO4',
              title: 'From what day are you *available* to start?',
              type: 'date',
              ref: 'application_start_date',
              properties: {},
            },
            {
              id: 'Et0Arf4DNGjA',
              title: 'Wine knowledge you got it?',
              type: 'long_text',
              ref: 'application_wine_knowledge',
              properties: {},
            },
            {
              id: 'Mf1gKBOlM0cH',
              title:
                'Do you have a Danish *work visa* and if so how many hours can you work per week?',
              type: 'multiple_choice',
              ref: 'application_visa_type',
              properties: {},
              choices: [
                {id: 'dYitAQM4E2Jv', label: 'EU/DK Citizen - Unlimited'},
                {
                  id: 'SyOJeOOxppPP',
                  label: 'Unrestricted Full Visa - 37.5 Hours',
                },
                {id: 'ja76ahHwIm7K', label: 'Work Holiday Visa - 37.5'},
                {id: 'HIsNuTjwgJUf', label: 'Restricted Visa 15 Hours'},
                {id: 'xpFIgnFmkeu8', label: 'No Visa'},
              ],
            },
            {
              id: 'rLsKTwtA17su',
              title:
                'What are the names of the last 3 *places that you worked at*? What was your *role*? How *long* were you at each? ',
              type: 'long_text',
              ref: 'application_work_experience',
              properties: {},
            },
            {
              id: 'GLYs8Gp0JO2v',
              title:
                'Which *languages* do you speak well enough to chat with guests?',
              type: 'multiple_choice',
              allow_multiple_selections: true,
              allow_other_choice: true,
              ref: 'application_spoken_languages',
              properties: {},
              choices: [
                {id: 'eMdsM7y9NP0z', label: 'English'},
                {id: 'HqBAsaLdyIuF', label: 'Danish'},
                {id: 'JuCjOZSTVlZM', label: 'Spanish'},
                {id: 'U19AUb4VAugp', label: 'Italian'},
              ],
            },
            {
              id: 'BwWBgiPM9z6g',
              title: 'Before we forget, please upload your *CV* here. ',
              type: 'file_upload',
              ref: 'application_cv',
              properties: {},
            },
            {
              id: 'epOKy5MsQpZm',
              title:
                "Also please leave us a *picture* to make it easier for us to recognize you if you're coming for an interview. Thanks!",
              type: 'file_upload',
              ref: 'application_profile_picture',
              properties: {},
            },
            {
              id: 'IBKDi1uxPQO3',
              title:
                "Looking great, what's your *phone number* so we can reach you?",
              type: 'phone_number',
              ref: 'application_phone_number',
              properties: {},
            },
            {
              id: 'ugDOlIVxJqQy',
              title:
                'Was a pleasure {{field:application_firstname}}! What is your *mail* so we can reach you?',
              type: 'email',
              ref: 'application_email',
              properties: {},
            },
            {
              id: 'Ieoc0nURdQTB',
              title:
                "By the way, if we don't have an open position now, would you like us to share your application with restaurants similar to *RESTAURANT NAME* so they can contact you for open positions?",
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
              properties: {},
              choices: [
                {id: 'm3OaL0R34AWY', label: 'Yes, please.'},
                {id: 'hEk8ITHSCvnP', label: 'No.'},
              ],
            },
          ],
        },
        answers: [
          {
            type: 'text',
            text: 'Rahsaan',
            field: {
              id: 'cY1AKL0dwxhI',
              type: 'short_text',
              ref: 'application_firstname',
            },
          },
          {
            type: 'text',
            text: 'Spencer',
            field: {
              id: 'F4ojF19MV52r',
              type: 'short_text',
              ref: 'application_lastname',
            },
          },
          {
            type: 'text',
            text:
              'I am very motivated because of innovate granular paradigms and also I like streamline revolutionary deliverables',
            field: {
              id: 'u7Wp1UIrMprx',
              type: 'short_text',
              ref: 'application_motivation',
            },
          },
          {
            type: 'text',
            text:
              'I have been working with reciprocal apps in a Synergized company and what I what really liked was evolve B2B mindshare',
            field: {
              id: 'wiK6DzdkRegG',
              type: 'short_text',
              ref: 'application_self_intro',
            },
          },
          {
            type: 'choice',
            choice: {
              label: 'U18 team member (select if between 16-18 years old)',
            },
            field: {
              id: 'bEWX6jrwYbC3',
              type: 'multiple_choice',
              ref: 'application_position',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Restaurant Manager'},
            field: {
              id: 'qGS1qAaGFKAu',
              type: 'multiple_choice',
              ref: 'application_position_foh',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Part-time or Full-time'},
            field: {
              id: 'l7rd6GLUASnd',
              type: 'multiple_choice',
              ref: 'application_workhours',
            },
          },
          {
            type: 'date',
            date: '2020-11-14',
            field: {
              id: 'mSWabOnBNxO4',
              type: 'date',
              ref: 'application_start_date',
            },
          },
          {
            type: 'text',
            text: 'Barolos',
            field: {
              id: 'Et0Arf4DNGjA',
              type: 'long_text',
              ref: 'application_wine_knowledge',
            },
          },
          {
            type: 'choice',
            choice: {label: 'No Visa'},
            field: {
              id: 'Mf1gKBOlM0cH',
              type: 'multiple_choice',
              ref: 'application_visa_type',
            },
          },
          {
            type: 'text',
            text:
              '\nNational Data Consultant as Assistant at Ondricka, Konopelski and Sipes for 2 years /\nNational Markets Specialist as Associate at Turcotte, Windler and Kshlerin for 3 years / \nHuman Accounts Specialist as Designer at Grant - Abshire for 5 years',
            field: {
              id: 'rLsKTwtA17su',
              type: 'long_text',
              ref: 'application_work_experience',
            },
          },
          {
            type: 'choices',
            choices: {labels: ['English']},
            field: {
              id: 'GLYs8Gp0JO2v',
              type: 'multiple_choice',
              ref: 'application_spoken_languages',
            },
          },
          {
            type: 'file_url',
            file_url: 'https://enhance_enterprise.jpg',
            field: {
              id: 'BwWBgiPM9z6g',
              type: 'file_upload',
              ref: 'application_cv',
            },
          },
          {
            type: 'file_url',
            file_url: 'http://placeimg.com/640/480/people',
            field: {
              id: 'epOKy5MsQpZm',
              type: 'file_upload',
              ref: 'application_profile_picture',
            },
          },
          {
            type: 'phone_number',
            phone_number: '+4506219552',
            field: {
              id: 'IBKDi1uxPQO3',
              type: 'phone_number',
              ref: 'application_phone_number',
            },
          },
          {
            type: 'email',
            email: 'Marcelina.Gutmann@hotmail.com',
            field: {
              id: 'ugDOlIVxJqQy',
              type: 'email',
              ref: 'application_email',
            },
          },
          {
            type: 'choice',
            choice: {label: 'Yes, please.'},
            field: {
              id: 'Ieoc0nURdQTB',
              type: 'multiple_choice',
              ref: 'application_shared_pool_consent',
            },
          },
        ],
      },
    },
  ],
};
