from django.db import models
from Utils.Errors import Error


# Create your models here.

class Review(models.Model):
    name = models.CharField(max_length=150)
    comment = models.TextField()
    evaluation = models.IntegerField(default=3, null=True, blank=True)
    errors = {}



    #created_at = models.DateTimeField(auto_now_add=True)

    PAGE_TITLE = 'Review'
    APP_NAME = 'review'

    class Meta:
        verbose_name = ('Review')
        verbose_name_plural = ('Reviews')

        

    def input_control(self, name, comment, evaluation):
        self.errors.clear()
        name_valid = self.set_name(name)
        comment_valid = self.set_comment(comment)
        evaluation_valid= self.set_evaluation(evaluation)

        return (name_valid and 
                comment_valid and
                evaluation_valid)
    
    def get_errors_dict(self):
        return {key.value: value for key, value in self.errors.items()}
    
    """ SETTER AND GETTERS """

    def get_name(self):
        return self.name

    def get_comment(self):
        return self.comment
    
    def get_evaluation(self):
       return self.evaluation 
    
    
            
    
    def set_name(self, name):
        self.name = name
        if not self.name:
            self.name = "user"
        return True

    def set_comment(self, comment):
        self.comment = comment
        if not self.comment:
            self.errors[Error.COMMENT] = 'Veuillez remplir le champ'
            return False
        return True
    
    def set_evaluation(self, evaluation):
        self.evaluation = evaluation
        return True
