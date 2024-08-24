from django.db import models

class PomodoroSessionManager(models.Manager):
    def completed_sessions(self, user):
        return self.filter(user = user, completed = True)
    
    def total_pomodoro_time(self, user):
        sessions = self.completed_sessions(user)
        total_time = sum((session.end_time - session.start_time).total_seconds() for session in sessions)
        return total_time