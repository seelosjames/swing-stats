from django.db import models
from django.conf import settings
from courses.models import Course, Hole, Tee

class Round(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='rounds')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='rounds')
    tee = models.ForeignKey(Tee, on_delete=models.SET_NULL, null=True, blank=True, related_name='rounds')
    date_played = models.DateField(auto_now_add=True)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} - {self.course.name} on {self.date_played}"

class HolePerformance(models.Model):
    FAIRWAY_CHOICES = [
        ('hit', 'Hit'),
        ('left', 'Left'),
        ('right', 'Right'),
        ('short', 'Short'),
        ('long', 'Long'),
        ('n/a', 'N/A'),  # Useful for par 3s
    ]

    GIR_CHOICES = [
        ('hit', 'Hit'),
        ('left', 'Left'),
        ('right', 'Right'),
        ('short', 'Short'),
        ('long', 'Long'),
    ]

    round = models.ForeignKey(Round, on_delete=models.CASCADE, related_name='hole_performances')
    hole = models.ForeignKey(Hole, on_delete=models.CASCADE)
    score = models.PositiveIntegerField()
    fairway = models.CharField(max_length=10, choices=FAIRWAY_CHOICES, default='n/a')
    gir = models.CharField(max_length=10, choices=GIR_CHOICES)
    putts = models.PositiveIntegerField(default=0)
    chips = models.PositiveIntegerField(default=0)
    bunker_shots = models.PositiveIntegerField(default=0)
    penalty_strokes = models.PositiveIntegerField(default=0)
    approach_shots = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ('round', 'hole')
        ordering = ['hole__number']

    def __str__(self):
        return f"{self.round} - Hole {self.hole.number}"

