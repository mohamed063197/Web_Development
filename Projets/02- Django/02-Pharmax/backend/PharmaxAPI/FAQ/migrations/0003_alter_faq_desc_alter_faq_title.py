# Generated by Django 5.0 on 2024-01-14 08:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FAQ', '0002_faq_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='faq',
            name='desc',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='faq',
            name='title',
            field=models.CharField(max_length=150),
        ),
    ]