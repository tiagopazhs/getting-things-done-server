# Getting things done - Backend

This is the front-end of Getting things done.
A project based in the book "The art of stress-free productivity" that is the method GTD of David Allen to personal productivity methodology that redefines how we approach our life and work.

![71B4ln9+X+L _SY466_](https://github.com/tiagopazhs/getting-things-done-client/assets/81580990/20eb368c-dfc4-4163-8440-5a898d8869bc)


❗**NOTE**: The content related to productivity and stress management on this project is based on my personal interpretation of David Allen's book "Getting Things Done." While I have studied and been inspired by Allen's techniques and he himself has encouraged the creation of this project, I don't have direct affiliation with the author or his work. I recommend users consult the original book for a comprehensive understanding of the methodologies.

See more on: https://gettingthingsdone.com/


## Contents

- [Table of Contents](#table-of-contents)
  - [Releases](#releases)
  - [Business Rules](#business-rules)
  - [Data base collections (Version 1)](#data-base-collections-version-1)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Frontend Repository](#frontend-repository)
 
## Releases

#### v1.0.0

- [Enviroment variables are not setting from process.env bug](https://github.com/tiagopazhs/getting-things-done-server/issues/11)
- [Read-me v1.0.0 documentation](https://github.com/tiagopazhs/getting-things-done-server/issues/8) - done
- [Crud of tasks](https://github.com/tiagopazhs/getting-things-done-server/issues/5) - done
- [Crud of actions](https://github.com/tiagopazhs/getting-things-done-server/issues/4) - done
- [prerequisites v1.0.0 documentation](https://github.com/tiagopazhs/getting-things-done-server/issues/3) - done
- [back-end planning documentation](https://github.com/tiagopazhs/getting-things-done-server/issues/1) - done
- [Setup API creating a ping pong route](https://github.com/tiagopazhs/getting-things-done-server/issues/7) - done
- [PostgreSQL setup](https://github.com/tiagopazhs/getting-things-done-server/issues/6) - done
- [modeling Action and Task collections documentation](https://github.com/tiagopazhs/getting-things-done-server/issues/2)


## Business Rules

The book describes 5 types of `things` that in the project will be defined as 5 `scopes`:
- Actions (Projects) - ⚠️ It will be the unique scope of **v1.0.0**.
- Follow-ups
- References
- Schedules
- Trash

For more details about business rules, see: https://github.com/tiagopazhs/getting-things-done-client/issues/2


## Data base collections (Version 1)

[workflow User Journey page: - made on https://lucid.app](https://github.com/tiagopazhs/getting-things-done-client/files/15376593/GTD.-.Page.1.pdf)

![image](https://github.com/tiagopazhs/getting-things-done-server/assets/81580990/87a9bc9d-fd77-4a93-a1e1-1291b2eba38f)

## Installation

Clone the repository to your machine with the following command:

```ruby
git@github.com:tiagopazhs/getting-things-done-server.git
```

Navigate to the root folder:

```bash
$ cd getting-things-done-server
```

And then install the packages running:

```bash
$ npm install
```

Run database migrations:

```bash
$ npx sequelize-cli db:migrate
```

## Usage

If your are not in the root folder, navigate to there using:

```bash
$ cd getting-things-done-server
```

Run the project:

```bash
$ npm run dev
```

Open your browser in the following path:

http://localhost:8022/


## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/tiagopazhs/getting-things-done-server/.

This project is intended to be a safe and welcoming space for collaboration 💪.

## License
This project is available as open source under the terms of the [MIT License](https://opensource.org/license/MIT).

## Frontend Repository
For more details about the frontend project, see: https://github.com/tiagopazhs/getting-things-done-client.
