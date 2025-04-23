from django.contrib import admin
from .models import Course, Hole, Tee, HoleTee, TeeDetails  # Import your model

# Register your model with the admin site
admin.site.register(Course)
admin.site.register(Hole)
admin.site.register(Tee)
admin.site.register(HoleTee)
admin.site.register(TeeDetails)