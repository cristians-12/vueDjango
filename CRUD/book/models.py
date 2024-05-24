from django.db import models
# from django.utils.translation import gettext_lazy as _

class Book(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    # price = models.DecimalField(max_digits=20, decimal_places=2)
    imagen = models.TextField()