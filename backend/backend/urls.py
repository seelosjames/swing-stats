from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/authentication/", include("authentication.urls")),  # Include authentication URLs
    path("api/courses/", include("courses.urls")),  # Include authentication URLs
]
