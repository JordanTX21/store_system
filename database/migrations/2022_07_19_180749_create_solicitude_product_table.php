<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSolicitudeProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('solicitude_product', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('product_id')->unsigned()->nullable();
            $table->foreign('product_id')
                ->references('id')
                ->on('product')
                ->onDelete('cascade');
            $table->bigInteger('solicitude_id')->unsigned()->nullable();
            $table->foreign('solicitude_id')
                ->references('id')
                ->on('solicitude')
                ->onDelete('cascade');
            $table->double('quantity');
            $table->boolean('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('solicitude_product');
    }
}
