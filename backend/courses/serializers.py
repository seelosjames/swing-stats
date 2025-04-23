from rest_framework import serializers
from .models import Course, Tee, Hole, HoleTee, TeeDetails

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'
        
class TeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tee
        fields = '__all__'

class HoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hole
        fields = '__all__'
        
class HoleTeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = HoleTee
        fields = '__all__'

class TeeDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeeDetails
        fields = '__all__'
