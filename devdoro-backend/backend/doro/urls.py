from django.urls import path
from .views import PomodoroSessionListCreateView, PomodoroSessionDetailView, PomodoroSummaryView

urlpatterns = [
    path('', PomodoroSessionListCreateView.as_view(), name='pomodoro-session-list-create'),
    path('sessions/<int:pk>/', PomodoroSessionDetailView.as_view(), name='pomodoro-session-detail'),
    path('summary/', PomodoroSummaryView.as_view(), name='pomodoro-summary'),
]

