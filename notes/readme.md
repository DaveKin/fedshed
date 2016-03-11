# Naming

Individual bins and instances of them are called 'activities'.

# Storage

It makes sense to use a flat-file storage solution as the quantity of data is unlikely to be huge in the first run. It would be good if the test library could be a seperate repo for maintainance but a standard format might be tricky to decide due to the multiple file types required.
Using flat file storage would mean that a full revision history could be kept.

# Test runner

Tests are an optional part of each activity - they will be more important in JS-centric activities than others but a good tool for making an activity self-guided.

# Use cases

- Initialise a new test for an unknown user (present)

frontend:
pick activity
enter user name 
start

backend:
create user account
create instance using new user and chosen activity

- Initialise a new test for an unknown user (remote)
- Set up multiple tests for a new user
- Assign a new test to a known user
- Create a new test from blank
- Create a new test by cloning an existing test
- Edit an existing test
- Deactivate a user
- View/watch the current state of an instance

# API

User:CRUD
Activity:CRUD

