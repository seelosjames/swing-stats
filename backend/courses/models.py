from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=120)
    city = models.CharField(max_length=80)
    state = models.CharField(max_length=20)
    country = models.CharField(max_length=80, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    zip_code = models.CharField(max_length=10, blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    num_holes = models.IntegerField(default=18)
    course_type = models.CharField(max_length=50, choices=[
        ('public', 'Public'),
        ('private', 'Private'),
        ('resort', 'Resort'),
        ('semi-private', 'Semi-private'),
    ], default='public')
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)

    def __str__(self):
        return self.name


class Hole(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="holes")
    number = models.IntegerField()

    class Meta:
        unique_together = ('course', 'number')
        ordering = ['number']

    def __str__(self):
        return f"{self.course.name} - Hole {self.number}"
    
    
class Tee(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="tees")
    name = models.CharField(max_length=50)  # e.g. Blue, White, Red
    rating = models.FloatField()
    slope = models.FloatField()
    total_yardage = models.IntegerField(blank=True, null=True)  # optional but useful

    def __str__(self):
        return f"{self.course.name} - {self.name} Tees"
    
class HoleTee(models.Model):
    hole = models.ForeignKey(Hole, on_delete=models.CASCADE, related_name="hole_tees")
    tee = models.ForeignKey(Tee, on_delete=models.CASCADE, related_name="hole_tees")
    yardage = models.IntegerField()
    par = models.IntegerField()
    handicap = models.IntegerField()

    class Meta:
        unique_together = ('hole', 'tee')

    def __str__(self):
        return f"{self.hole} - {self.tee.name} Tee"