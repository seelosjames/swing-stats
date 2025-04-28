# performance/serializers.py

from rest_framework import serializers
from .models import Round, HolePerformance

class HolePerformanceSerializer(serializers.ModelSerializer):
    hole_number = serializers.IntegerField(source='hole.number', read_only=True)

    class Meta:
        model = HolePerformance
        fields = [
            'id',
            'hole',
            'hole_number',
            'score',
            'fairway',
            'gir',
            'putts',
            'chips',
            'bunker_shots',
            'penalty_strokes',
            'approach_shots',
        ]

class RoundSerializer(serializers.ModelSerializer):
    hole_performances = HolePerformanceSerializer(many=True, required=False)

    class Meta:
        model = Round
        fields = [
            'id',
            'user',
            'course',
            'tee',
            'date_played',
            'notes',
            'hole_performances',
        ]
        read_only_fields = ['user', 'date_played']

    def create(self, validated_data):
        hole_data = validated_data.pop('hole_performances', [])
        round_instance = Round.objects.create(**validated_data)

        for hole_perf in hole_data:
            HolePerformance.objects.create(round=round_instance, **hole_perf)

        return round_instance

    def update(self, instance, validated_data):
        hole_data = validated_data.pop('hole_performances', None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        if hole_data is not None:
            for hole_perf_data in hole_data:
                hole_id = hole_perf_data.get('hole').id
                hole_perf_instance, created = HolePerformance.objects.get_or_create(
                    round=instance,
                    hole_id=hole_id,
                    defaults=hole_perf_data
                )
                if not created:
                    for key, value in hole_perf_data.items():
                        setattr(hole_perf_instance, key, value)
                    hole_perf_instance.save()

        return instance
