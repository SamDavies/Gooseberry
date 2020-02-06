start:
	docker-compose -f docker-compose.yml up --build

test:
	docker build \
		--target test \
		--tag gooseberry .

lint:
	docker build \
		--target lint \
		--tag gooseberry .

publish:
	docker build \
		--build-arg NPM_TOKEN=${NPM_TOKEN} \
		--target publish \
		--tag gooseberry . \
		&& docker run gooseberry

deploy-static:
	docker build \
		--build-arg NOW_TOKEN=${NOW_TOKEN} \
		--target deploy-static \
		--tag gooseberry . \
		&& docker run gooseberry

deploy-docs:
	docker build \
		--build-arg NOW_TOKEN=${NOW_TOKEN} \
		--target deploy-docs \
		--tag gooseberry . \
		&& docker run gooseberry

remove:
	docker rm website
