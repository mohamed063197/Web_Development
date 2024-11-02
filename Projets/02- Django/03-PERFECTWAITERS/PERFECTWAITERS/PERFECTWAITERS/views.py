from avis.models import Review
from django.db.models import Avg
from django.shortcuts import get_object_or_404, render, redirect

def index(request):
    data = Review.objects.all().order_by('id')
    if request.method == 'POST':
        item = Review()
        context = dict()
        bool = item.input_control(request.POST.get('name'),
                              request.POST.get('comment'),
                              request.POST.get('evaluation'))
        print(bool)
        if not bool:
            print('POST : save - ERROR')
            
            errors = item.get_errors_dict()
            print(item.get_errors_dict())
            context = {
                'data': data,
                'errors': errors,
            }
            return render(request,'index.html',context)
        
        
        print('POST : save')
        item.set_name(request.POST.get('name'))
        item.set_comment(request.POST.get('comment'))
        item.set_evaluation(request.POST.get('evaluation'))

        item.save()
        return redirect('index')
    
    #context for GET
    moyenne_evaluations = Review.objects.aggregate(moyenne=Avg('evaluation'))['moyenne']

    moyenne_evaluations = moyenne_evaluations or 0.0

    moyenne_arrondie = round(moyenne_evaluations)
    context = {
        'data': data,
        'moyenne_arrondie': moyenne_arrondie,
    }
    
    return render(request, 'index.html',context)

