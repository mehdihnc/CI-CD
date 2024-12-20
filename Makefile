.PHONY: install test build docker-up docker-down


DOCKER_COMPOSE = docker-compose -f exo3/docker-compose.yml


install:
	@echo "Installation des dépendances..."
	cd exo1 && npm install
	cd exo2 && npm install
	cd exo3/api && npm install


test:
	@echo "Exécution des tests exo1..."
	cd exo1 && npm test
	@echo "Exécution des tests exo2..."
	cd exo2 && npm test


build:
	@echo "Build exo1..."
	cd exo1 && npm run build
	@echo "Build exo2..."
	cd exo2 && npm run build


docker-up:
	@echo "Démarrage des containers..."
	$(DOCKER_COMPOSE) up --build -d

docker-down:
	@echo "Arrêt des containers..."
	$(DOCKER_COMPOSE) down


all: install test build


clean:
	@echo "Nettoyage..."
	rm -rf */node_modules
	rm -rf */dist
	rm -rf */coverage
	$(DOCKER_COMPOSE) down -v

# Aide
help:
	@echo "Commandes disponibles:"
	@echo "  make install    - Installe les dépendances"
	@echo "  make test      - Lance les tests"
	@echo "  make build     - Build les projets"
	@echo "  make docker-up - Démarre les containers"
	@echo "  make docker-down - Arrête les containers"
	@echo "  make all       - Installe, teste et build"
	@echo "  make clean     - Nettoie le projet" 