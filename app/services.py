import random

WIDTH = 10
HEIGHT = 10

def generate_level():
    level = [[0 for _ in range(WIDTH)] for _ in range(HEIGHT)]

    for y in range(1, HEIGHT - 1):
        for x in range(1, WIDTH - 1):
            if level[y][x - 1] == 0 and x % 2 == 0:
                rand = random.randint(0, 10)
                if rand > 2:
                    level[y][x] = 1

    return level
