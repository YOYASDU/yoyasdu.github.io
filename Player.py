import pygame
from pygame.locals import *
import time
import sys

#### Pour les participants, tout est vide sauf l'init !

class Player:
    # ceci est appelé lors de la création du joueur ! C'est ici que tout est initialisé
    def __init__(self):
        self.img = pygame.image.load("assets/serpentaire.png")
        self.img = pygame.transform.scale(self.img, (100, 100))
        self.x = 0
        self.y = 700
        self.player_speed = 5
        self.bullet_speed = 10
        self.bullets = []
        self.bullet = pygame.image.load("assets/caducee.png")
        self.bullet = pygame.transform.scale(self.bullet, (50, 50))
        self.clock = time.time() * 1000  # millisecondes
        self.shooting_speed = 1  # secondes
        self.hp = 3
        self.font = pygame.font.SysFont(None, 64)
        self.hp_text = "HP : " + str(self.hp)

    # affiche les éléments relatifs au joueur
    def display(self, screen):
        screen.blit(self.img, (self.x, self.y))
        for bullet in self.bullets:
            screen.blit(bullet[0], (bullet[1], bullet[2])) # bullet[1] est la position 'x', bullet[1] la position 'y'

        white = (255, 255, 255) # la couleur blanche au format RGB
        text_img = self.font.render(self.hp_text, True, white) # affiche le texte
        screen.blit(text_img, (0, 0))

    # met à jour les informations relatives au joueur
    def update(self, enemies):
        if self.x < 1100:
            if pygame.key.get_pressed()[K_RIGHT]:
                self.x += self.player_speed
        if self.y < 800:
            if pygame.key.get_pressed()[K_DOWN]:
                self.y += self.player_speed
        if self.y > 0:
            if pygame.key.get_pressed()[K_UP]:
                self.y -= self.player_speed
        if self.x > 0:
            if pygame.key.get_pressed()[K_LEFT]:
                self.x -= self.player_speed
        
        time_now = time.time() * 1000 # création de chrono
        if time_now - self.clock > self.shooting_speed * 1000: # a-t-il atteint 1 seconde ?
            self.bullets.append([self.bullet, self.x, self.y]) # j’ajoute un caducée
            self.clock = time_now # je relance le chrono à zéro
        for bullet in range(len(self.bullets)): # pour tous mes projectiles
            self.bullets[bullet][2] -= self.bullet_speed # je les déplace en ‘y’

        # permet de détuire les projectiles en dehors de l'écran, en re-stockant les projectiles "vivants" en ayant retiré les projectiles "morts"
        alive_bullets = []
        for bullet in range(len(self.bullets)):
           if self.bullets[bullet][2] > -50: # le caducée est hors de l’écran de 50 pixels
               alive_bullets.append(self.bullets[bullet])
        self.bullets = alive_bullets
        
        # gère les projectiles du joueur
        for bullet in range(len(self.bullets)):
            self.bullets[bullet][2] -= self.bullet_speed # déplace le projectile
            if enemies.bullet_collide(self.bullets[bullet][1], self.bullets[bullet][2]): 
# supprime le projectile
 # s'il touche un ennemi
                del self.bullets [bullet]
                break

        # crée du texte à partir du montant de point de vie du joueur
        self.hp_text = "HP : " + str(self.hp)





        # vérifie la collision d'un projectile avec le joueur, puis lui retire des points de vie
        damage = enemies.player_collision(self.x, self.y)
        # permet de ne pas avoir de points de vie en négatifs
        if damage == -1:
            self.hp = 0
        else:
            self.hp -= damage

        return # retire-moi quand tu feras des changements ici