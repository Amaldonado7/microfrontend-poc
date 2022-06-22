.PHONY: install start

install:
	@echo "Installing app 1 libraries..."
	@npm install --prefix ./app1
	@echo "Installing app2 libraries..."
	@npm install --prefix ./app2
	@echo "Installing container libraries..."
	@npm install --prefix ./container

start:
	@echo "Starting servers..."
	@npm run dev

//

dashboard:
	@npm start --prefix="mfe-dashboard"

footer:
	@npm start --prefix="mfe-footer"

sidebar:
	@npm start --prefix="mfe-sidebar"

container:
	@npm start --prefix="mfe-container"


start:
	@make -j 4 dashboard footer sidebar container
