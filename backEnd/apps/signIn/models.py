from django.db import models

# Create your models here.

class citizenship_details(models.Model):
	citizenship_id = models.AutoField(primary_key=True)
	citizenship_name = models.CharField(max_length=100)
	citizen_code = models.CharField(max_length=100)
	status = models.CharField(max_length=100)
	class Meta:
		db_table = 'citizenship_details'

class city_master(models.Model):
	city_id = models.AutoField(primary_key=True)
	city_name = models.CharField(max_length=100)
	country_code = models.CharField(max_length=100)
	status = models.CharField(max_length=100)
	class Meta:
		db_table = 'city_master'

class currency_details(models.Model):
	currency_id = models.AutoField(primary_key=True)
	currency_code = models.CharField(max_length=100)
	currency_display_name = models.CharField(max_length=100)
	currency_status = models.CharField(max_length=2)
	class Meta:
		db_table = 'currency_details'
	

class user_type_master(models.Model):
    user_type_id = models.AutoField(primary_key = True)
    user_type_name = models.CharField(max_length = 100)
    user_type_status = models.CharField(max_length = 100)
    class Meta:
        db_table = 'user_type_master'

class group_details(models.Model):
    group_id = models.AutoField(primary_key = True)
    r_user_type_id = models.ForeignKey(user_type_master, on_delete = models.CASCADE, db_column = 'r_user_type_id')
    group_alias_name = models.CharField(max_length = 20)
    group_name = models.CharField(max_length = 100)
    access_group_id = models.CharField(max_length = 100)
    active_status = models.CharField(max_length = 20)
    class Meta:
        db_table = 'group_details'

class status_details(models.Model):
    status_id = models.AutoField(primary_key = True)
    r_group_id = models.ForeignKey(group_details, on_delete = models.CASCADE, db_column='r_group_id')
    status_code = models.CharField(max_length = 10)
    status_name = models.CharField(max_length = 100)
    front_end = models.CharField(max_length = 100)
    class Meta:
        db_table = 'status_details'
        

class UserDetails(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    additional_info = models.CharField(max_length=100)
    r_group_id = models.IntegerField()
    status = models.CharField(max_length=2)
    r_status_id = models.IntegerField()

    class Meta:
        db_table = 'user_details'