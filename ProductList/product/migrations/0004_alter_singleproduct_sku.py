# Generated by Django 3.2.9 on 2022-06-07 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_alter_singleproduct_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='singleproduct',
            name='SKU',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]