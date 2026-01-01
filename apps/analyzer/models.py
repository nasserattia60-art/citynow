from django.db import models

# Create your models here.
# apps/community/models.py


class City(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True
    )

    slug = models.SlugField(
        unique=True
    )

    latitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        help_text="Latitude (e.g. 30.044420)"
    )

    longitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        help_text="Longitude (e.g. 31.235712)"
    )

    is_active = models.BooleanField(
        default=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        verbose_name = "City"
        verbose_name_plural = "Cities"
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["latitude", "longitude"]),
        ]

    def __str__(self):
        return self.name
