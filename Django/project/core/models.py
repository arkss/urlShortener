from django.db import models, connection


class Url(models.Model):
    origin_url = models.URLField()

    def __str__(self):
        return self.origin_url
