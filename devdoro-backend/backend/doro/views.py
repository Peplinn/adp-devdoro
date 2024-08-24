from rest_framework import generics, permissions
from rest_framework.response import Response
from django.utils import timezone

from .models import PomodoroSession
from .serializers import PomodoroSessionSerializer

class PomodoroSessionListCreateView(generics.ListCreateAPIView):
    queryset = PomodoroSession.objects.all()
    serializer_class = PomodoroSessionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return PomodoroSession.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user, completed=False)

    
class PomodoroSessionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PomodoroSession.objects.all()
    serializer_class = PomodoroSessionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_update(self, serializer):
        if not serializer.instance.completed:
            serializer.save(completed=True, end_time=timezone.now())

class PomodoroSummaryView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, **args):
        total_time = PomodoroSession.objects.all.get_duration(request.user)
        return Response({'session_duration': total_time})