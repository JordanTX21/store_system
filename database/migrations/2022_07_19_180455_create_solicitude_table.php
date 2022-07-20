<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSolicitudeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('solicitude', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('request_user_id')->unsigned()->nullable();
            $table->foreign('request_user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->bigInteger('update_user_id')->unsigned()->nullable();
            $table->foreign('update_user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->tinyInteger('status_solicitude')->default(0); // 0 = Pendiente, 1 = Aceptada, 2 = Rechazada, 3 = Finalizada
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
        Schema::dropIfExists('solicitude');
    }
}
