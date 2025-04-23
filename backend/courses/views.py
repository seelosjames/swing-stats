from rest_framework.generics import ListAPIView
from .models import Course
from .serializers import CourseSerializer

class CourseListView(ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer