import pygame
from Player import *
from Enemies import *

# lance une fenêtre d'une largeur de 1200 pixels de large et 900 pixels de haut
pygame.init()
window_width = 1200
window_height = 800
running = True
screen = pygame.display.set_mode((window_width, window_height))

# crée le joueur et les ennemis
player = Player()
enemies = Enemies()

# crée le fond depuis l'image, puis modifie sa taille pour correspondre à celle de l'écran
background = pygame.image.load("assets/space.jpg")
background = pygame.transform.scale(background, (window_width, window_height))

clock = pygame.time.Clock()  # crée un "timer" qui permet de rendre le jeu plus fluide
while running:
    clock.tick(60)  # utilise le timer
    # vérifie si une condition d'arrêt du programme est rencontrée
    for event in pygame.event.get():
        if pygame.key.get_pressed()[K_ESCAPE]:
            running = False
        if player.hp <= 0:
            sys.exit(0)
        if event.type == pygame.QUIT:
            running = False

    # vérifie l'état du joueur et des ennemis
    player.update(enemies)
    enemies.update()

    # affiche tous les éléments à l'écran
    screen.blit(background, (0, 0))
    player.display(screen)
    enemies.display(screen)
    pygame.display.update()
