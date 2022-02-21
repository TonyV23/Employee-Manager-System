import re
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from Employee.models import Employees, Departments
from Employee.serializers import DepartmentSerializer, EmployeeSerializer


# Create your views here.

@csrf_exempt
def departmentApi(request, id=0):
    if request.method == 'GET':
        departments = Departments.objects.all()
        departments_serializer = DepartmentSerializer(departments, many= True)
        return JsonResponse( departments_serializer.data, safe=False)

    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        department_serializer = DepartmentSerializer( data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Added Successfully !!", safe=False)
        return JsonResponse("Failed to Add !!", safe=False)
    
    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        department = Departments.objects.get(DepartmentId =department_data['DepartmentId'])
        department_serializer = DepartmentSerializer(department, data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Update Successfully !!", safe=False)
        return JsonResponse("Failed to Update !!", safe=False)

    elif request.method == 'DELETE':
        department = Departments.objects.get(DepartmentId = id)
        department.delete()
        return JsonResponse ("Deleted Successfully !!", safe=False)        
