# default action `make`
default: compile

# install the gitbook directroy
gitbook_install:
	gitbook install

# build the gitbook files
gitbook_build:
	gitbook build

# build and serve with live reload
gitbook_serve:
	gitbook serve

# one step make to build: `make`
compile: gitbook_install gitbook_build

# one step make to serve: `make serve`
serve: gitbook_install gitbook_serve