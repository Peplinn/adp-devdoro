from rest_framework import serializers
from .models import PomodoroSession

class PomodoroSessionSerializer(serializers.ModelSerializer):

    class Meta:
        model = PomodoroSession
        fields = ['id', 'user', 'start_time', 'end_time', 'completed', 'duration']
        read_only_fields = ['id', 'user', 'duration', 'completed']

    duration = serializers.SerializerMethodField()

    def get_duration(self, obj):
        return obj.get_duration().total_seconds() if obj.end_time else None
    