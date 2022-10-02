// $(document).ready(function () { $('#show-edit').click(function () { $('#showpersonal-data').addClass('d-none'); }) });

$(document).ready(function() {
    console.log('edt')

    $('#show-editPsw').click(function() {
        $('#showEmail').addClass('d-none');
        $('#edtPsw').removeClass('d-none');
    })
    $('#btn-cancleedtPsw').click(function() {
        $('#showEmail').removeClass('d-none');
        $('#edtPsw').addClass('d-none');
    })

    $('#show-editPersonalData').click(function() {
        $('#showpersonal-data').addClass('d-none');
        $('#edtPersonalData').removeClass('d-none');
    })
    $('#btn-canclePersonalData').click(function() {
        $('#showpersonal-data').removeClass('d-none');
        $('#edtPersonalData').addClass('d-none');
    })

    $('#show-editContactData').click(function() {
        $('#showcontact-data').addClass('d-none');
        $('#edtContactData').removeClass('d-none');
    })
    $('#btn-cancleContactData').click(function() {
        $('#showcontact-data').removeClass('d-none');
        $('#edtContactData').addClass('d-none');
    })

    
    // $('#btnEmailPsw').click(function() {
    //   $('#showEmail').removeClass('d-none');
    //   $('#edtPsw').addClass('d-none');
    // })

    // $('#btnPersonal').click(function() {
    //   $('#showpersonal-data').removeClass('d-none');
    //   $('#edtPersonalData').addClass('d-none');
    // })

    // $('#btnContact').click(function() {
    //   $('#showcontact-data').removeClass('d-none');
    //   $('#edtContactData').addClass('d-none');
    // })


    $('#basic-genlink').click(function() {
      $('#copy-link').addClass('d-none');
      $('#copied-link').removeClass('d-none');
    })
});

var toastTriggerEmailPsw = document.getElementById('btnEmailPsw')
var toastLiveEmailPsw = document.getElementById('ToastbtnEmailPsw')
if (toastTriggerEmailPsw) {
    toastTriggerEmailPsw.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveEmailPsw)

    toast.show()
  })
}

var toastTriggerPersonal = document.getElementById('btnPersonal')
var toastLivePersonal = document.getElementById('ToastbtnPersonal')
if (toastTriggerPersonal) {
  toastTriggerPersonal.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLivePersonal)

    toast.show()
  })
}

var toastTriggerContact = document.getElementById('btnContact')
var toastLiveContact = document.getElementById('ToastbtnContact')
if (toastTriggerContact) {
  toastTriggerContact.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveContact)

    toast.show()
  })
}

/* chart_filter-today */
var options_today = {
  series: [{
  name: 'จำนวนการจองทั้งหมด',
  type: 'column',
  data: [0, 0, 0, 10, 20, 30, 25, 40, 36, 18, 27, 20, 0, 0, 0, 0]
}, {
  name: 'จำนวนการเข้าชมเว็บ',
  type: 'line',
  data: [0, 0, 0, 23, 35, 35, 45, 50, 40, 20 , 40, 30, 0, 0, 0, 0]
}, {
  name: 'จำนวนการจองที่เช็คเอาต์แล้ว',
  type: 'line',
  data: [0, 0, 0, 12, 10, 10, 10, 35, 25, 12 , 27, 17, 0, 0, 0, 0]
}],
  chart: {
  height: 400,
  type: 'line',
},
stroke: {
  width: [0, 4]
},
title: {
  text: 'การแสดงผล'
},
dataLabels: {
  enabled: true,
  enabledOnSeries: [1]
},
labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
xaxis: {
  type: 'time',
  title: {
    text: 'เวลา'
  }
},
yaxis: [{
  title: {
    text: 'จำนวน'
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart_filter-today"), options_today);
chart.render();
/* chart_filter-today */

/* chart_filter-thisweek */
var options_thisweek = {
  series: [{
  name: 'จำนวนการจองทั้งหมด',
  type: 'column',
  data: [0, 10, 20, 30, 25, 40, 36]
}, {
  name: 'จำนวนการเข้าชมเว็บ',
  type: 'line',
  data: [0, 23, 35, 35, 45, 50, 40]
}, {
  name: 'จำนวนการจองที่เช็คเอาต์แล้ว',
  type: 'line',
  data: [0, 12, 10, 10, 10, 35, 25]
}],
  chart: {
  height: 400,
  type: 'line',
},
stroke: {
  width: [0, 4]
},
title: {
  text: 'การแสดงผล'
},
dataLabels: {
  enabled: true,
  enabledOnSeries: [1]
},
labels: ['20/02/2022', '21/02/2022', '22/02/2022', '23/02/2022', '24/02/2022', '25/02/022', '26/02/2022'],
xaxis: {
  type: 'date',
  title: {
    text: 'วันที่'
  }
},
yaxis: [{
  title: {
    text: 'จำนวน'
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart_filter-thisweek"), options_thisweek);
chart.render();
/* chart_filter-thisweek */

/* chart_filter-month */
var options_month = {
  series: [{
  name: 'จำนวนการจองทั้งหมด',
  type: 'column',
  data: [10, 20, 30, 40]
}, {
  name: 'จำนวนการเข้าชมเว็บ',
  type: 'line',
  data: [23, 35, 35, 50]
}, {
  name: 'จำนวนการจองที่เช็คเอาต์แล้ว',
  type: 'line',
  data: [12, 10, 10, 20]
}],
  chart: {
  height: 400,
  type: 'line',
},
stroke: {
  width: [0, 4]
},
title: {
  text: 'การแสดงผล'
},
dataLabels: {
  enabled: true,
  enabledOnSeries: [1]
},
labels: ['สัปดาห์ 1', 'สัปดาห์ 2', 'สัปดาห์ 3', 'สัปดาห์ 4'],
xaxis: {
  type: 'text',
  title: {
    text: 'สัปดาห์'
  }
},
yaxis: [{
  title: {
    text: 'จำนวน'
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart_filter-month"), options_month);
chart.render();
/* chart_filter-month */
